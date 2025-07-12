import React, { useState } from 'react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = ['9:00–10:00', '10:00–11:00', '11:00–12:00', '12:00–1:00', '2:00–3:00'];

const initialTimetable: Record<Day, string[]> = {
  Monday: ['Math', 'Science', 'English', '', 'Computer'],
  Tuesday: ['History', '', 'Math', 'Science', 'English'],
  Wednesday: ['English', 'Math', 'Science', 'Computer', ''],
  Thursday: ['', 'English', 'Geography', 'Math', 'Science'],
  Friday: ['Science', '', 'English', 'Math', 'Computer'],
};

const Timetable: React.FC = () => {
  const [timetable, setTimetable] = useState(initialTimetable);

  const handleChange = (day: Day, periodIndex: number, value: string) => {
    setTimetable((prev) => ({
      ...prev,
      [day]: prev[day].map((subject, idx) => (idx === periodIndex ? value : subject)),
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Weekly Timetable</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 text-left">Day / Period</th>
              {periods.map((p, i) => (
                <th key={i} className="p-2 text-center">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day} className="border-b">
                <td className="p-2 font-semibold">{day}</td>
                {timetable[day].map((subject, i) => (
                  <td key={i} className="p-2 text-center">
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => handleChange(day, i, e.target.value)}
                      className="w-full border rounded px-2 py-1 text-sm"
                      placeholder="Enter Subject"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
