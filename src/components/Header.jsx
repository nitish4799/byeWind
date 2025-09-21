import { ChevronDown, Search, Bell, Sun, Moon, Menu, PanelRight } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = ({ user, onMenuClick, onRightMenuClick, sidebarOpen, rightSidebarOpen }) => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Mobile menu and breadcrumb */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button 
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md lg:hidden text-gray-600 dark:text-gray-300"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600 dark:text-gray-300">Dashboards</span>
              <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              <span className="text-gray-900 dark:text-white font-medium">Default</span>
            </div>
          </div>

          {/* Center - Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-gray-600 text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 dark:text-gray-500">
                <span className="bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-xs">⌘/</span>
              </div>
            </div>
          </div>

          {/* Right side - Theme toggle, notifications, and user profile */}
          <div className="flex items-center space-x-2">
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-600 dark:text-gray-300 transition-colors"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            
            {/* Notifications */}
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md relative text-gray-600 dark:text-gray-300">
              <Bell className="h-4 w-4" />
            </button>

            {/* Right sidebar toggle (mobile/tablet only) */}
            <button 
              onClick={onRightMenuClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md xl:hidden text-gray-600 dark:text-gray-300"
              title="Toggle right panel"
            >
              <PanelRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
