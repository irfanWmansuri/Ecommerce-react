import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const pieData = [
  { name: 'Direct', value: 1200.42, color: '#8b5cf6' },
  { name: 'Affiliate', value: 353.42, color: '#facc15' },
  { name: 'Sponsored', value: 413.31, color: '#ef4444' },
  { name: 'E-mail', value: 235.72, color: '#06b6d4' }
];

// Custom tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, payload: entry } = payload[0];
    return (
      <div className="bg-slate-800 p-2 rounded shadow text-xs text-white">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="font-medium">{name}</span>
        </div>
        <div>${value.toFixed(2)}</div>
      </div>
    );
  }
  return null;
};

export default function TotalSalesPieChart() {
  return (
    <div className="rounded-xl bg-gray-800 p-4 text-white w-full max-w-md">
      <h2 className="text-sm text-slate-300 font-medium mb-4 pb-2 border-b-[1px]">Total Sales</h2>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-2 text-sm">
        {pieData.map((entry, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-slate-300">{entry.name}</span>
            </div>
            <span className="text-slate-400">${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
