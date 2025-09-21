const Activities = ({ activities }) => {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Activities</h3>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-xs">{activity.user.avatar}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-gray-100 leading-tight">{activity.message}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 block">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities
