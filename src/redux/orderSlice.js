import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  currentPage: 1,
  itemsPerPage: 8,
  searchTerm: '',
  showFilters: false,
  selected: [],
  sortConfig: { key: null, direction: 'asc' },
  filters: {
    status: '',
    dateRange: '',
    user: '',
  },
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page on search
    },
    setShowFilters: (state, action) => {
      state.showFilters = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    addToSelected: (state, action) => {
      state.selected.push(action.payload);
    },
    removeFromSelected: (state, action) => {
      state.selected = state.selected.filter(id => id !== action.payload);
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1; // Reset to first page on filter change
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.searchTerm = '';
      state.sortConfig = initialState.sortConfig;
      state.currentPage = 1;
      state.selected = [];
    },
    toggleSort: (state, action) => {
      const key = action.payload;
      if (state.sortConfig.key === key) {
        state.sortConfig.direction = state.sortConfig.direction === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortConfig = { key, direction: 'asc' };
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setOrders,
  setCurrentPage,
  setSearchTerm,
  setShowFilters,
  setSelected,
  addToSelected,
  removeFromSelected,
  setSortConfig,
  setFilters,
  clearFilters,
  toggleSort,
  setLoading,
  setError,
} = ordersSlice.actions;

export default ordersSlice.reducer;
