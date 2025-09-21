import {
  Plus,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Search,
  MoreHorizontal,
  X,
  ChevronDown,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import clsx from 'clsx';
import useOrderList from '../hooks/useOrderList';

const OrdersList = () => {
  const {
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
  } = useOrderList();

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Complete':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'Approved':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
      case 'Rejected':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const UserAvatar = ({ user }) => (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-medium text-xs">{user?.avatar || user?.name?.slice(0, 2).toUpperCase()}</span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">{user?.name}</span>
    </div>
  );

  const TableHeader = ({ label, sortKey, className = '' }) => (
    <th
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 ${className}`}
      onClick={() => handleSort(sortKey)}
    >
      <div className="flex items-center space-x-1">
        <span>{label}</span>
        {sortConfig.key === sortKey &&
          (sortConfig.direction === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />)}
        {sortConfig.key !== sortKey && <ArrowUpDown className="h-3 w-3 opacity-50" />}
      </div>
    </th>
  );

  const Pagination = ({ className = '' }) => (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedOrders.length)} of {filteredAndSortedOrders.length} results
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center space-x-1">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={clsx(
                'px-3 py-1.5 text-sm font-medium rounded transition-colors',
                currentPage === page
                  ? 'text-white bg-gray-600 dark:bg-gray-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900',
              )}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const OrderCard = ({ order, index }) => (
    <div
      className={`bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-600 p-4 space-y-3 ${
        index === 3 ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
      } ${selected.includes(order.id) ? 'ring-2 ring-gray-500 dark:ring-gray-400' : ''}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="rounded border-gray-300 dark:border-gray-600 text-gray-600 focus:ring-gray-500 dark:bg-black"
            checked={selected.includes(order.id)}
            onChange={(e) => handleSelectOne(order.id, e.target.checked)}
          />
          <span className="text-sm font-bold text-gray-900 dark:text-white">#{order.id}</span>
        </div>
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 rounded">
          <MoreHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <div className="space-y-3">
        <UserAvatar user={order.user} />

        <div className="grid grid-cols-1 gap-2 text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide font-medium">Project</span>
            <p className="text-gray-900 dark:text-white font-medium">{order.project}</p>
          </div>

          <div>
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide font-medium">Address</span>
            <p className="text-gray-600 dark:text-gray-300">{order.address}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide font-medium">Date</span>
              <p className="text-gray-500 dark:text-gray-300">{order.date}</p>
            </div>

            <span className={clsx('inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium', getStatusColor(order.status))}>
              <div
                className={clsx(
                  'w-1.5 h-1.5 rounded-full mr-1.5',
                  order.status === 'Complete' && 'bg-green-500 dark:bg-green-400',
                  order.status === 'In Progress' && 'bg-blue-500 dark:bg-blue-400',
                  order.status === 'Pending' && 'bg-orange-500 dark:bg-orange-400',
                  order.status === 'Approved' && 'bg-gray-500 dark:bg-gray-400',
                  order.status === 'Rejected' && 'bg-red-500 dark:bg-red-400',
                )}
              ></div>
              {order.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) return <div className="text-center py-8">Loading orders...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-base sm:text-base font-bold text-gray-900 dark:text-white">Order List</h1>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex space-x-2 sm:space-x-3">
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center p-2 sm:p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 text-sm">
            <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400 sm:mr-0" />
            <span className="ml-2 sm:hidden">Add</span>
          </button>
          <button
            onClick={handleToggleFilters}
            className={clsx(
              'flex-1 sm:flex-initial relative inline-flex items-center justify-center p-2 sm:p-2 border rounded-md shadow-sm text-sm',
              showFilters || activeFilterCount > 0
                ? 'border-gray-500 bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400',
            )}
          >
            <Filter className="h-4 w-4 sm:mr-0" />
            <span className="ml-2 sm:hidden">Filter</span>
            {activeFilterCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <button
            onClick={() => handleSort('date')}
            className={clsx(
              'flex-1 sm:flex-initial inline-flex items-center justify-center p-2 sm:p-2 border rounded-md shadow-sm text-sm',
              sortConfig.key
                ? 'border-gray-500 bg-gray-50 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400',
            )}
          >
            <ArrowUpDown className="h-4 w-4 sm:mr-0" />
            <span className="ml-2 sm:hidden">Sort</span>
          </button>
        </div>
        <div className="relative flex-1 sm:max-w-md">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border-0 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white dark:focus:bg-gray-800 text-sm"
          />
        </div>
        {(activeFilterCount > 0 || sortConfig.key) && (
          <button
            onClick={handleClearFilters}
            className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all
          </button>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-600 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
              <div className="relative">
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-black border-0 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">All Statuses</option>
                  {uniqueStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* User Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">User</label>
              <div className="relative">
                <select
                  value={filters.user}
                  onChange={(e) => handleFilterChange('user', e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-black border-0 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">All Users</option>
                  {uniqueUsers.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Range</label>
              <div className="relative">
                <select
                  value={filters.dateRange}
                  onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                  className="w-full appearance-none bg-gray-50 dark:bg-black border-0 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={handleClearFilters}
                className="w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Card View (Hidden on lg+) */}
      <div className="lg:hidden space-y-4">
        {currentOrders.length > 0 ? (
          currentOrders.map((order, index) => <OrderCard key={`${order.id}-${index}`} order={order} index={index} />)
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">No orders found matching your search and filters.</div>
        )}
      </div>

      {/* Desktop Table View (Hidden on mobile/tablet) */}
      <div className="hidden lg:block">
        <div className="bg-white dark:bg-black rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-black">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-gray-600 text-gray-600 focus:ring-gray-500 dark:bg-black"
                      checked={isAllSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = isIndeterminate;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <TableHeader label="Order ID" sortKey="id" />
                  <TableHeader label="User" sortKey="user" />
                  <TableHeader label="Project" sortKey="project" />
                  <TableHeader label="Address" sortKey="address" />
                  <TableHeader label="Date" sortKey="date" />
                  <TableHeader label="Status" sortKey="status" />
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-600">
                {currentOrders.length > 0 ? (
                  currentOrders.map((order, index) => (
                    <tr
                      key={`${order.id}-${index}`}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-900 ${
                        selected.includes(order.id) ? 'bg-gray-50 dark:bg-gray-900/20' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 dark:border-gray-600 text-gray-600 focus:ring-gray-500 dark:bg-black"
                          checked={selected.includes(order.id)}
                          onChange={(e) => handleSelectOne(order.id, e.target.checked)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">#{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <UserAvatar user={order.user} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{order.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{order.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={clsx(
                            'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
                            getStatusColor(order.status),
                          )}
                        >
                          <div
                            className={clsx(
                              'w-1.5 h-1.5 rounded-full mr-1.5',
                              order.status === 'Complete' && 'bg-green-500 dark:bg-green-400',
                              order.status === 'In Progress' && 'bg-blue-500 dark:bg-blue-400',
                              order.status === 'Pending' && 'bg-orange-500 dark:bg-orange-400',
                              order.status === 'Approved' && 'bg-gray-500 dark:bg-gray-400',
                              order.status === 'Rejected' && 'bg-red-500 dark:bg-red-400',
                            )}
                          ></div>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                      No orders found matching your search and filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Desktop Pagination */}
          {filteredAndSortedOrders.length > 0 && (
            <div className="bg-white dark:bg-black px-6 py-4 border-t border-gray-200 dark:border-gray-600">
              <Pagination />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Pagination */}
      {filteredAndSortedOrders.length > 0 && (
        <div className="lg:hidden">
          <Pagination className="flex-col space-y-3 items-stretch sm:flex-row sm:space-y-0 sm:items-center" />
        </div>
      )}
    </div>
  );
};

export default OrdersList;
