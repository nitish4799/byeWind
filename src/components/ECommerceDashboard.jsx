import { TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import clsx from 'clsx';
import SalesChart from './SalesChart';

const ECommerceDashboard = ({ data }) => {
  const MetricCard = ({ title, value, change, trending, subtitle }) => {
    const isPositive = trending === 'up';
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
              <div className="flex items-center space-x-1">
                <span className={clsx('text-xs font-medium text-gray-300 dark:text-gray-500')}>{change}</span>
                <TrendIcon className={clsx('w-3 h-3 text-gray-800 dark:text-gray-200')} />
              </div>
            </div>
            {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">eCommerce</h1>
      </div>

      {/* Top Row: Metrics Cards and Projections vs Actuals */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Left side: 4 Metrics Cards in 2x2 grid */}
        <div className="xl:col-span-1">
          <div className="grid grid-cols-2 gap-4 h-full">
            <MetricCard
              title="Customers"
              value={data?.metrics?.customers?.value || '3,781'}
              change={data?.metrics?.customers?.change || '+11.01%'}
              trending={data?.metrics?.customers?.trending || 'up'}
            />
            <MetricCard
              title="Orders"
              value={data?.metrics?.orders?.value || '1,219'}
              change={data?.metrics?.orders?.change || '-0.03%'}
              trending={data?.metrics?.orders?.trending || 'down'}
            />
            <MetricCard
              title="Revenue"
              value={data?.metrics?.revenue?.value || '$695'}
              change={data?.metrics?.revenue?.change || '+15.03%'}
              trending={data?.metrics?.revenue?.trending || 'up'}
            />
            <MetricCard
              title="Growth"
              value={data?.metrics?.growth?.value || '30.1%'}
              change={data?.metrics?.growth?.change || '+6.08%'}
              trending={data?.metrics?.growth?.trending || 'up'}
            />
          </div>
        </div>

        {/* Right side: Projections vs Actuals Chart */}
        <div className="xl:col-span-1 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projections vs Actuals</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={
                data?.projectionsVsActuals?.data || [
                  { month: 'Jan', actual: 16, projection: 4 },
                  { month: 'Feb', actual: 20, projection: 5 },
                  { month: 'Mar', actual: 17, projection: 4 },
                  { month: 'Apr', actual: 22, projection: 5 },
                  { month: 'May', actual: 14, projection: 4 },
                  { month: 'Jun', actual: 19, projection: 5 },
                ]
              }
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Bar dataKey="actual" stackId="stack1" fill="#7dd3fc" radius={[0, 0, 0, 0]} name="Actual" />
              <Bar dataKey="projection" stackId="stack1" fill="#bfdbfe" radius={[4, 4, 0, 0]} name="Projection" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row: Revenue and Location Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue</h3>
          </div>
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-900 dark:bg-white rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Current Week</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{data?.revenue?.currentWeek || '$58,211'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Previous Week</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{data?.revenue?.previousWeek || '$68,768'}</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={
                data?.revenue?.data || [
                  { month: 'Jan', current: 12, previous: 8 },
                  { month: 'Feb', current: 8, previous: 15 },
                  { month: 'Mar', current: 15, previous: 12 },
                  { month: 'Apr', current: 18, previous: 20 },
                  { month: 'May', current: 22, previous: 18 },
                  { month: 'Jun', current: 25, previous: 22 },
                ]
              }
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Line type="monotone" dataKey="current" stroke="#000" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="previous" stroke="#ccc" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue by Location</h3>
          </div>

          {/* World Map */}
          <div className="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <svg className="w-full h-32" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              {/* World Map Simplified Shapes */}
              {/* North America */}
              <path
                d="M50 80 Q60 70 80 75 Q100 70 120 80 Q110 90 100 100 Q80 95 60 100 Q40 90 50 80Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* South America */}
              <path
                d="M80 120 Q85 110 90 115 Q95 125 100 140 Q95 155 85 150 Q75 140 80 120Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* Europe */}
              <path
                d="M180 70 Q190 65 200 70 Q210 75 205 85 Q195 80 185 85 Q175 80 180 70Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* Africa */}
              <path
                d="M180 100 Q190 95 200 100 Q205 110 210 130 Q200 140 190 135 Q180 125 175 115 Q175 105 180 100Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* Asia */}
              <path
                d="M220 80 Q240 75 260 80 Q280 85 300 90 Q290 100 280 105 Q260 100 240 95 Q220 90 220 80Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* Australia */}
              <path
                d="M280 140 Q290 135 300 140 Q305 145 300 150 Q290 150 280 145 Q275 140 280 140Z"
                fill="#cbd5e1"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.7"
                className="dark:fill-gray-600 dark:stroke-gray-500"
              />

              {/* Location Dots */}
              {/* New York */}
              <circle cx="90" cy="85" r="3" fill="#1f2937" className="dark:fill-gray-300" />

              {/* San Francisco */}
              <circle cx="65" cy="90" r="3" fill="#1f2937" className="dark:fill-gray-300" />

              {/* Sydney */}
              <circle cx="290" cy="145" r="3" fill="#1f2937" className="dark:fill-gray-300" />

              {/* Singapore */}
              <circle cx="270" cy="120" r="3" fill="#1f2937" className="dark:fill-gray-300" />
            </svg>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            {[
              { location: 'New York', value: 72, amount: '72K' },
              { location: 'San Francisco', value: 39, amount: '39K' },
              { location: 'Sydney', value: 25, amount: '25K' },
              { location: 'Singapore', value: 61, amount: '61K' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.location}</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                    <div className="bg-blue-400 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Top Selling Products and Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Selling Products */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Selling Products</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {(
                  data?.topSellingProducts || [
                    {
                      name: 'ASOS Ridley High Waist',
                      price: '$79.49',
                      quantity: 82,
                      amount: '$6,518.18',
                    },
                    {
                      name: 'Marco Lightweight Shirt',
                      price: '$128.50',
                      quantity: 37,
                      amount: '$4,754.50',
                    },
                    {
                      name: 'Half Sleeve Shirt',
                      price: '$39.99',
                      quantity: 64,
                      amount: '$2,559.36',
                    },
                    {
                      name: 'Lightweight Jacket',
                      price: '$20.00',
                      quantity: 184,
                      amount: '$3,680.00',
                    },
                    {
                      name: 'Marco Shoes',
                      price: '$79.49',
                      quantity: 64,
                      amount: '$1,965.81',
                    },
                  ]
                ).map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{product.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{product.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <SalesChart/>
      </div>
    </div>
  );
};

export default ECommerceDashboard;
