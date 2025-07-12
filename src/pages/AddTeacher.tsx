// pages/AddTeacher.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTeacher = ({ setTeachers }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject) return;

    setTeachers(prev => [
      ...prev,
      {
        id: Date.now(),
        name,
        subject
      }
    ]);

    navigate('/teachers');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          <option value="History">History</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
