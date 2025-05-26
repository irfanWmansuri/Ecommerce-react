import { useState } from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = {
  monthly: [
    { date: 'Jan', current: 20, past: 10 },
    { date: 'Feb', current: 30, past: 25 },
    { date: 'Mar', current: 25, past: 35 },
    { date: 'Apr', current: 40, past: 30 },
    { date: 'May', current: 90, past: 35 },
    { date: 'Jun', current: 120, past: 55 },
    { date: 'Jul', current: 110, past: 40 }
  ]
};

const stats = [
  { label: 'Current Week', value: '$235,965', color: 'text-purple-400', dot: 'bg-purple-400' },
  { label: 'Past Week', value: '$198,214', color: 'text-cyan-400', dot: 'bg-cyan-400' },
  { label: "Today's Earning", value: '$2,562.30', color: 'text-slate-400', dot: '' }
];

export default function SalesOverTimeChart() {
  const [range, setRange] = useState('1M');
  const tabs = ['All', '1M', '6M', '1Y'];

  return (
    <div
      className="w-full rounded-xl text-white p-4 bg-gray-800">
      <div className="flex justify-between items-center mb-2 pb-2 border-b-[1px]">
        <h2 className="text-sm text-slate-300 font-medium">Revenue</h2>
        <div className="flex gap-2 text-xs">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={cn(
                'px-2 py-1 rounded-md transition-colors',
                range === t ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data.monthly} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 140]} />
          <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
          <Area
            type="monotone"
            dataKey="past"
            stroke="#06b6d4"
            fill="url(#colorPast)"
            fillOpacity={1}
            dot={{ fill: '#06b6d4' }}
          />
          <Area
            type="monotone"
            dataKey="current"
            stroke="#8b5cf6"
            fill="url(#colorCurrent)"
            fillOpacity={1}
            dot={{ fill: '#8b5cf6' }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-between items-center dark:bg-gray-900 mt-4 rounded-lg p-4 text-sm">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {s.dot && <span className={`w-2 h-2 rounded-full ${s.dot}`} />}
              <span className="text-slate-400">{s.label}</span>
            </div>
            <span className={`text-lg font-semibold ${s.color}`}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
