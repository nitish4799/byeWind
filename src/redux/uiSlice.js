import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'dashboard',
  sidebarOpen: false,
  rightSidebarOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setRightSidebarOpen: (state, action) => {
      state.rightSidebarOpen = action.payload
    },
    toggleRightSidebar: (state) => {
      state.rightSidebarOpen = !state.rightSidebarOpen
    },
    closeAllSidebars: (state) => {
      state.sidebarOpen = false
      state.rightSidebarOpen = false
    },
  },
})

export const {
  setActiveTab,
  setSidebarOpen,
  toggleSidebar,
  setRightSidebarOpen,
  toggleRightSidebar,
  closeAllSidebars,
} = uiSlice.actions

export default uiSlice.reducer
