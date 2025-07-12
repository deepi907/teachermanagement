import React, { useState } from 'react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

const availableSubjects = ['Math', 'Science', 'English', 'History', 'Geography', 'Computer'];

const initialTeachers: Teacher[] = [
  { id: 1, name: 'Mr. Sharma', subject: 'Math' },
  { id: 2, name: 'Ms. Gupta', subject: 'Science' },
  { id: 3, name: 'Mrs. Das', subject: 'English' },
];

const AssignSubjects: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);

  const handleSubjectChange = (id: number, newSubject: string) => {
    const updated = teachers.map((t) =>
      t.id === id ? { ...t, subject: newSubject } : t
    );
    setTeachers(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Assign Subjects to Teachers</h2>

      <table className="min-w-full bg-white shadow rounded-md">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Assigned Subject</th>
            <th className="text-left p-2">Change Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-b">
              <td className="p-2">{teacher.name}</td>
              <td className="p-2">{teacher.subject}</td>
              <td className="p-2">
                <select
                  value={teacher.subject}
                  onChange={(e) => handleSubjectChange(teacher.id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  {availableSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignSubjects;
