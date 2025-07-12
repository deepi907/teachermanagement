import React from 'react';

type Teacher = {
  id: number;
  name: string;
  subject: string;
};

type Props = {
  teachers: Teacher[];
};

const AllTeachers: React.FC<Props> = ({ teachers }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Teachers</h2>
      {teachers.length === 0 ? (
        <p>No teachers available.</p>
      ) : (
        <ul className="space-y-3">
          {teachers.map((teacher) => (
            <li key={teacher.id} className="p-4 bg-white rounded shadow">
              <div className="font-semibold">{teacher.name}</div>
              <div className="text-sm text-gray-600">{teacher.subject}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTeachers;

