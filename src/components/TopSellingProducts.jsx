const TopSellingProducts = ({ products }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left py-2 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-2 text-sm font-medium text-gray-600">Quantity</th>
              <th className="text-left py-2 text-sm font-medium text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100">
                <td className="py-3 text-sm text-gray-900">{product.name}</td>
                <td className="py-3 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                <td className="py-3 text-sm text-gray-900">{product.quantity}</td>
                <td className="py-3 text-sm text-gray-900">${product.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSellingProducts


