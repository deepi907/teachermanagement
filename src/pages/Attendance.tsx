import React, { useState } from 'react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

const initialTeachers: Teacher[] = [
  { id: 1, name: 'Mr. Sharma', subject: 'Math' },
  { id: 2, name: 'Ms. Gupta', subject: 'Science' },
  { id: 3, name: 'Mrs. Das', subject: 'English' },
];

const Attendance: React.FC = () => {
  const [attendance, setAttendance] = useState<Record<number, 'Present' | 'Absent' | null>>(
    Object.fromEntries(initialTeachers.map((t) => [t.id, null]))
  );

  const markAttendance = (id: number, status: 'Present' | 'Absent') => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Teacher Attendance</h2>

      <table className="min-w-full bg-white shadow rounded-md">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Subject</th>
            <th className="text-left p-2">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {initialTeachers.map((teacher) => (
            <tr key={teacher.id} className="border-b">
              <td className="p-2">{teacher.name}</td>
              <td className="p-2">{teacher.subject}</td>
              <td className="p-2 flex gap-2 items-center">
                <button
                  className={`px-3 py-1 rounded ${
                    attendance[teacher.id] === 'Present' ? 'bg-green-600 text-white' : 'bg-green-100'
                  }`}
                  onClick={() => markAttendance(teacher.id, 'Present')}
                >
                  Present
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    attendance[teacher.id] === 'Absent' ? 'bg-red-600 text-white' : 'bg-red-100'
                  }`}
                  onClick={() => markAttendance(teacher.id, 'Absent')}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
