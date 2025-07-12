import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts';

const performanceData = {
  January: {
    2023: [
      { name: 'Mr. Sharma', score: 82 },
      { name: 'Ms. Gupta', score: 91 },
      { name: 'Mrs. Das', score: 75 },
    ],
    2024: [
      { name: 'Mr. Sharma', score: 85 },
      { name: 'Ms. Gupta', score: 92 },
      { name: 'Mrs. Das', score: 78 },
    ],
  },
  March: {
    2023: [
      { name: 'Mr. Sharma', score: 79 },
      { name: 'Ms. Gupta', score: 88 },
      { name: 'Mrs. Das', score: 80 },
    ],
    2024: [
      { name: 'Mr. Sharma', score: 87 },
      { name: 'Ms. Gupta', score: 90 },
      { name: 'Mrs. Das', score: 85 },
    ],
  }
};

const months = Object.keys(performanceData);

const Performance: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  const data2023 = performanceData[selectedMonth]['2023'];
  const data2024 = performanceData[selectedMonth]['2024'];

  // Merge datasets for grouped chart
  const mergedData = data2023.map((item, idx) => ({
    name: item.name,
    '2023': item.score,
    '2024': data2024[idx]?.score ?? 0,
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Teacher Performance Comparison</h2>

      {/* Filter */}
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="month" className="text-sm font-medium">Select Term:</label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-4">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={mergedData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="2023" fill="#60a5fa" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2024" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Performance;
