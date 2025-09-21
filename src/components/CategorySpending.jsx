const CategorySpending = ({ categories }) => {
  const totalAmount = categories.reduce((sum, category) => sum + category.amount, 0)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
      
      <div className="space-y-4">
        {categories.map((category, index) => {
          const percentage = (category.amount / totalAmount) * 100
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  ${category.amount.toFixed(2)}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${category.color.replace('text-', 'bg-').replace('100', '200')}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              
              <div className="text-right">
                <span className="text-xs text-gray-500">{percentage.toFixed(1)}%</span>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total Spent</span>
          <span className="text-lg font-bold text-gray-900">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default CategorySpending

