const RevenueByLocation = ({ locations }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Location</h3>
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-900">{location.location}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{location.revenue}K</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RevenueByLocation


