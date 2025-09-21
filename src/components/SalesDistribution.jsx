const SalesDistribution = ({ sales }) => {
  const total = sales.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Sales</h3>
      
      {/* Donut Chart Representation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{
            clipPath: `conic-gradient(from 0deg, #3B82F6 0deg ${(sales[0].amount / total) * 360}deg, #E5E7EB ${(sales[0].amount / total) * 360}deg)`
          }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">${total.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {sales.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-green-500' :
                index === 2 ? 'bg-yellow-500' : 'bg-purple-500'
              }`}></div>
              <span className="text-sm text-gray-900">{item.method}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{item.percentage}%</div>
              <div className="text-xs text-gray-500">${item.amount.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalesDistribution


