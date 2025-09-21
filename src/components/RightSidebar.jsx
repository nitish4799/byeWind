import clsx from 'clsx'
import Notifications from './Notifications'
import Activities from './Activities'
import Contacts from './Contacts'

const RightSidebar = ({ isOpen, onClose, notifications, activities, contacts }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={onClose}
        />
      )}

      {/* Right Sidebar */}
      <div className={clsx(
        "fixed right-0 top-0 h-full w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-600 z-50 transform transition-transform duration-300 ease-in-out xl:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>

        {/* Content */}
        <div className="p-6 space-y-8 overflow-y-auto h-full pb-20">
          <Notifications notifications={notifications} />
          <Activities activities={activities} />
          <Contacts contacts={contacts} />
        </div>
      </div>
    </>
  )
}

export default RightSidebar
