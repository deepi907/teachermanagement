import React, { useState } from 'react';
import {
  Users, UserPlus, CalendarCheck, Book,
  Clock, Inbox, BarChart, Shield
} from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import AllTeachers from './pages/AllTeachers';
import AddTeacher from './pages/AddTeacher';
import Attendance from './pages/Attendance';
import AssignSubjects from './pages/AssignSubjects';
import Timetable from './pages/Timetable';
import LeaveRequests from './pages/LeaveRequests';
import Performance from './pages/Performance';
import Payment from './pages/Payment';

const teacherNavButtons = [
  { name: "All Teachers", path: "/teachers", icon: "Users" },
  { name: "Add Teacher", path: "/teachers/add", icon: "UserPlus" },
  { name: "Attendance", path: "/teachers/attendance", icon: "CalendarCheck" },
  { name: "Assign Subjects", path: "/teachers/assign-subjects", icon: "Book" },
  { name: "Timetable", path: "/teachers/timetable", icon: "Clock" },
  { name: "Leave Requests", path: "/teachers/leaves", icon: "Inbox" },
  { name: "Performance", path: "/teachers/performance", icon: "BarChart" },
  { name: "Roles & Permissions", path: "/teachers/roles", icon: "Shield" },
  { name: "Payment", path: "/teachers/payment", icon: "CreditCard" },
];

const iconMap = {
  Users: <Users className="w-5 h-5" />,
  UserPlus: <UserPlus className="w-5 h-5" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5" />,
  Book: <Book className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Inbox: <Inbox className="w-5 h-5" />,
  BarChart: <BarChart className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
};

const App = () => {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Mr. Sharma', subject: 'Math' },
    { id: 2, name: 'Ms. Gupta', subject: 'Science' },
    { id: 3, name: 'Mrs. Das', subject: 'English' },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">MyApp</h1>
        <nav className="flex flex-col gap-2">
          {teacherNavButtons.map((btn) => (
            <button
              key={btn.path}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate(btn.path)}
            >
              {iconMap[btn.icon as keyof typeof iconMap]}
              {btn.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/teachers" element={<AllTeachers teachers={teachers} />} />
          <Route path="/teachers/add" element={<AddTeacher setTeachers={setTeachers} />} />
          <Route path="/teachers/attendance" element={<Attendance />} />
          <Route path="/teachers/assign-subjects" element={<AssignSubjects />} />
          <Route path="/teachers/timetable" element={<Timetable />} />
          <Route path="/teachers/leaves" element={<LeaveRequests />} />
          <Route path="/teachers/performance" element={<Performance />} />
           <Route path="/teachers/payment" element={<Payment />} />

          <Route path="/teachers/roles" element={<div>Roles & Permissions Page</div>} />
          <Route path="*" element={<div>Welcome to the App!</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

