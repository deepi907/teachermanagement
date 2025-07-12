import React, { useState } from 'react';

type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';

interface LeaveRequest {
  id: number;
  teacher: string;
  date: string;
  reason: string;
  status: LeaveStatus;
}

const initialLeaves: LeaveRequest[] = [
  {
    id: 1,
    teacher: 'Mr. Sharma',
    date: '2025-07-15',
    reason: 'Medical Appointment',
    status: 'Pending',
  },
  {
    id: 2,
    teacher: 'Ms. Gupta',
    date: '2025-07-17',
    reason: 'Family Event',
    status: 'Approved',
  },
  {
    id: 3,
    teacher: 'Mrs. Das',
    date: '2025-07-18',
    reason: 'Personal Leave',
    status: 'Rejected',
  },
];

const statusColorMap: Record<LeaveStatus, string> = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Approved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
};

const LeaveRequests: React.FC = () => {
  const [leaves] = useState(initialLeaves);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Leave Requests</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-blue-100 text-sm">
            <tr>
              <th className="text-left px-4 py-2">Teacher</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Reason</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-t text-sm hover:bg-gray-50 transition">
                <td className="px-4 py-2 font-medium">{leave.teacher}</td>
                <td className="px-4 py-2">{leave.date}</td>
                <td className="px-4 py-2">{leave.reason}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColorMap[leave.status]}`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequests;
