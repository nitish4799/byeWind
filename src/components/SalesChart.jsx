import { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from '../contexts/ThemeContext'; // Adjust path as needed

const SalesChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDarkMode } = useTheme(); // Get theme context

  // Define colors for both light and dark modes
  const data = [
    {
      name: 'Direct',
      value: 38.6,
      lightColor: '#1f2937', // Dark gray for light mode
      darkColor: '#f3f4f6', // Light gray for dark mode
      amount: '$300.56',
    },
    {
      name: 'Affiliate',
      value: 21.2,
      lightColor: '#86efac', // Light green
      darkColor: '#86efac', // Same green works in both modes
      amount: '$135.18',
    },
    {
      name: 'Sponsored',
      value: 24.1,
      lightColor: '#818cf8', // Light purple
      darkColor: '#a78bfa', // Slightly lighter purple for dark mode
      amount: '$154.02',
    },
    {
      name: 'E-mail',
      value: 16.1,
      lightColor: '#7dd3fc', // Light blue
      darkColor: '#93c5fd', // Slightly different blue for dark mode
      amount: '$48.96',
    },
  ];

  // Get the appropriate color based on theme
  const getColor = (item) => (isDarkMode ? item.darkColor : item.lightColor);

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(0);

  return (
    <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-100 dark:border-gray-600 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Total Sales</h3>

      <div className="relative mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              paddingAngle={8} // spacing between segments
              stroke="none"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(entry)}
                  style={{
                    filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                  }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-3 py-1.5 rounded-lg shadow-lg">
            <div className="text-base font-bold">{data[activeIndex]?.value}%</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              activeIndex === index ? 'bg-gray-50 dark:bg-gray-900' : 'hover:bg-gray-50 dark:hover:bg-gray-900'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: getColor(item) }}></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
