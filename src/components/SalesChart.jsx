import { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SalesChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: 'Direct', value: 47, color: '#1f2937', amount: '$300.56' },
    { name: 'Affiliate', value: 21.2, color: '#86efac', amount: '$135.18' },
    { name: 'Sponsored', value: 24.1, color: '#818cf8', amount: '$154.02' },
    { name: 'E-mail', value: 7.7, color: '#7dd3fc', amount: '$48.96' },
  ];

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
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
              paddingAngle={10}   // gives spacing between segments
              stroke="none"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
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
          <div className="bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-100 px-3 py-1.5 rounded-lg shadow-lg">
            <div className="text-base font-bold">
              {data[activeIndex]?.value}%
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              activeIndex === index 
                ? 'bg-gray-50 dark:bg-gray-700' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full shadow-sm" 
                style={{ backgroundColor: item.color }}
              ></div>
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
