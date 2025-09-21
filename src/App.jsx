import { useAppSelector, useAppDispatch } from './hooks/redux'
import { 
  setActiveTab, 
  toggleSidebar, 
  toggleRightSidebar,
  setSidebarOpen,
  setRightSidebarOpen 
} from './redux/uiSlice'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar'
import TabNavigation from './components/TabNavigation'
import ECommerceDashboard from './components/ECommerceDashboard'
import OrdersList from './components/OrdersList'
import Notifications from './components/Notifications'
import Activities from './components/Activities'
import Contacts from './components/Contacts'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { byewindData } from './data/byewindData'

function App() {
  const dispatch = useAppDispatch()
  const { activeTab, sidebarOpen, rightSidebarOpen } = useAppSelector((state) => state.ui)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <ECommerceDashboard data={byewindData} />
      case 'orders':
        return <OrdersList data={byewindData} />
      default:
        return <ECommerceDashboard data={byewindData} />
    }
  }

  // Determine if right sidebar should be visible by default
  const shouldShowDefaultRightSidebar = activeTab === 'dashboard'

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
          <Sidebar
            activeTab={activeTab}
            onTabChange={(tab) => dispatch(setActiveTab(tab))}
            isOpen={sidebarOpen}
            onClose={() => dispatch(setSidebarOpen(false))}
            navigation={byewindData.navigation}
            user={byewindData.user}
          />

          <div className="flex-1 flex">
            {/* Main content area */}
            <div className="flex-1 flex flex-col">
              <Header
                user={byewindData.user}
                onMenuClick={() => dispatch(toggleSidebar())}
                onRightMenuClick={() => dispatch(toggleRightSidebar())}
                sidebarOpen={sidebarOpen}
                rightSidebarOpen={rightSidebarOpen}
              />

              <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
                <TabNavigation 
                  activeTab={activeTab} 
                  onTabChange={(tab) => dispatch(setActiveTab(tab))} 
                />
                {renderContent()}
              </main>
            </div>

            {/* Desktop Right Column - Conditional visibility based on active tab */}
            {shouldShowDefaultRightSidebar && (
              <div className="hidden xl:block w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6 space-y-8">
                <Notifications notifications={byewindData.notifications} />
                <Activities activities={byewindData.activities} />
                <Contacts contacts={byewindData.contacts} />
              </div>
            )}
          </div>

          {/* Mobile/Tablet Right Sidebar - Always available when toggled */}
          <RightSidebar
            isOpen={rightSidebarOpen}
            onClose={() => dispatch(setRightSidebarOpen(false))}
            notifications={byewindData.notifications}
            activities={byewindData.activities}
            contacts={byewindData.contacts}
          />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
