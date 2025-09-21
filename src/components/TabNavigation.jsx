import clsx from 'clsx'

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'orders', label: 'Order List' }
  ]

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={clsx(
                'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.key
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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