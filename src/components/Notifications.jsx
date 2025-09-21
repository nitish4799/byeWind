import { Bug, User, Wifi } from 'lucide-react'

const Notifications = ({ notifications }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'bug':
        return <Bug className="h-4 w-4 text-gray-500" />
      case 'user':
        return <User className="h-4 w-4 text-gray-500" />
      case 'subscription':
        return <Wifi className="h-4 w-4 text-gray-500" />
      default:
        return <Bug className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Notifications</h3>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-gray-100 leading-tight">{notification.message}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 block">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
