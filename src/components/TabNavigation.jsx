import clsx from 'clsx'

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'orders', label: 'Order List' }
  ]

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200 dark:border-gray-600">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={clsx(
                'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.key
                  ? 'border-gray-500 dark:border-gray-400 text-gray-600 dark:text-gray-300'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500'
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TabNavigation
