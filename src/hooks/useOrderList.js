import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentPage,
  setSearchTerm,
  setShowFilters,
  setSelected,
  addToSelected,
  removeFromSelected,
  setFilters,
  clearFilters,
  toggleSort,
} from '../redux/orderSlice';

const useOrdersList = () => {
  const dispatch = useDispatch();
  const {
    orders,
    currentPage,
    itemsPerPage,
    searchTerm,
    showFilters,
    selected,
    sortConfig,
    filters,
    loading,
    error,
  } = useSelector((state) => state.orders);

  // Generate sample data
  const generateSampleData = () => {
    const users = [
      { name: 'Natali Craig', avatar: 'NC' },
      { name: 'Kate Morrison', avatar: 'KM' },
      { name: 'Drew Cano', avatar: 'DC' },
      { name: 'Orlando Diggs', avatar: 'OD' },
      { name: 'Andi Lane', avatar: 'AL' },
      { name: 'Koray Okumus', avatar: 'KO' },
      { name: 'Jane Smith', avatar: 'JS' },
      { name: 'Mike Johnson', avatar: 'MJ' },
      { name: 'Sarah Wilson', avatar: 'SW' },
      { name: 'Tom Brown', avatar: 'TB' },
    ];

    const projects = [
      'Landing Page',
      'CRM Admin pages',
      'Client Project',
      'Admin Dashboard',
      'App Landing Page',
      'E-commerce Site',
      'Mobile App UI',
      'Database Design',
      'API Development',
      'Frontend Redesign',
    ];

    const addresses = [
      'Meadow Lane Oakland',
      'Larry San Francisco',
      'Bagwell Avenue Ocala',
      'Washburn Baton Rouge',
      'Nest Lane Olivette',
      'Pine Street Seattle',
      'Oak Avenue Portland',
      'Elm Road Denver',
      'Maple Drive Austin',
      'Cedar Lane Boston',
    ];

    const statuses = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];

    const dateOptions = [
      'Just now',
      'A minute ago',
      '1 hour ago',
      '2 hours ago',
      '3 hours ago',
      'Yesterday',
      '2 days ago',
      '3 days ago',
      '1 week ago',
      '2 weeks ago',
    ];

    const allOrders = [];
    for (let i = 0; i < 50; i++) {
      allOrders.push({
        id: `CM${9801 + i}`,
        user: users[i % users.length],
        project: projects[i % projects.length],
        address: addresses[i % addresses.length],
        date: dateOptions[i % dateOptions.length],
        status: statuses[i % statuses.length],
        timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      });
    }
    return allOrders;
  };

  const allOrders = orders.length > 0 ? orders : generateSampleData();

  // Get unique values for filter dropdowns
  const uniqueStatuses = useMemo(() => [...new Set(allOrders.map((order) => order.status))], [allOrders]);
  const uniqueUsers = useMemo(() => [...new Set(allOrders.map((order) => order.user.name))], [allOrders]);

  // Sorting function
  const sortOrders = (orders) => {
    if (!sortConfig.key) return orders;

    return [...orders].sort((a, b) => {
      let aValue, bValue;

      switch (sortConfig.key) {
        case 'id':
          aValue = parseInt(a.id.replace('CM', ''));
          bValue = parseInt(b.id.replace('CM', ''));
          break;
        case 'user':
          aValue = a.user.name.toLowerCase();
          bValue = b.user.name.toLowerCase();
          break;
        case 'project':
          aValue = a.project.toLowerCase();
          bValue = b.project.toLowerCase();
          break;
        case 'address':
          aValue = a.address.toLowerCase();
          bValue = b.address.toLowerCase();
          break;
        case 'date':
          aValue = a.timestamp;
          bValue = b.timestamp;
          break;
        case 'status':
          aValue = a.status.toLowerCase();
          bValue = b.status.toLowerCase();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  };

  // Filter and sort orders
  const filteredAndSortedOrders = useMemo(() => {
    let filtered = allOrders;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    // Apply user filter
    if (filters.user) {
      filtered = filtered.filter((order) => order.user.name === filters.user);
    }

    // Apply date range filter
    if (filters.dateRange) {
      const now = new Date();
      filtered = filtered.filter((order) => {
        const orderDate = order.timestamp;
        switch (filters.dateRange) {
          case 'today':
            return orderDate >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
          case 'week':
            return orderDate >= new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          case 'month':
            return orderDate >= new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          default:
            return true;
        }
      });
    }

    return sortOrders(filtered);
  }, [allOrders, searchTerm, filters, sortConfig]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredAndSortedOrders.slice(startIndex, endIndex);

  // Checkbox state logic
  const isAllSelected = currentOrders.length > 0 && selected.length === currentOrders.length;
  const isIndeterminate = selected.length > 0 && selected.length < currentOrders.length;

  const activeFilterCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  // Action handlers
  const handleSearchChange = (value) => {
    dispatch(setSearchTerm(value));
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleToggleFilters = () => {
    dispatch(setShowFilters(!showFilters));
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      dispatch(setSelected(currentOrders.map((order) => order.id)));
    } else {
      dispatch(setSelected([]));
    }
  };

  const handleSelectOne = (orderId, checked) => {
    if (checked) {
      dispatch(addToSelected(orderId));
    } else {
      dispatch(removeFromSelected(orderId));
    }
  };

  const handleSort = (key) => {
    dispatch(toggleSort(key));
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilters({ [filterType]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return {
    // State
    currentPage,
    searchTerm,
    showFilters,
    selected,
    sortConfig,
    filters,
    loading,
    error,
    
    // Computed values
    currentOrders,
    filteredAndSortedOrders,
    uniqueStatuses,
    uniqueUsers,
    totalPages,
    startIndex,
    endIndex,
    isAllSelected,
    isIndeterminate,
    activeFilterCount,
    
    // Action handlers
    handleSearchChange,
    handlePageChange,
    handleNextPage,
    handlePrevPage,
    handleToggleFilters,
    handleSelectAll,
    handleSelectOne,
    handleSort,
    handleFilterChange,
    handleClearFilters,
    getPageNumbers,
  };
};

export default useOrdersList;
