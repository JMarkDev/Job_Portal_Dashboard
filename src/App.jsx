import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Application from "./pages/Admin/Application";
import SearchJob from "./pages/Admin/SearchJob";
import Companies from "./pages/Admin/Companies";
import Statistics from "./pages/Admin/Statistics";
import Settings from "./pages/Admin/Settings";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Pagenotfound from "./pages/Admin/Pagenotfound";
import Dashboard from "./pages/Admin/Dashboard";
import Register from './pages/Admin/Register';
import Login from './pages/Admin/Login';
import AppliedJobs from './pages/Applicant/AppliedJobs';
import Profile from './pages/Applicant/Profile';
import DashboardApplicant from './pages/Applicant/DashboardApplicant';


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const validPath = [
    '/dashboard-admin',
    '/application',
    '/searchjob',
    '/companies',
    '/statistics',
    '/settings'
  ];

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
    document.body.classList.toggle('hide-sidebar');
  }

  return (
    <>
      {validPath.includes(location.pathname) && (
        <>
          <Navbar showSidebar={showSidebar} handleSidebarToggle={handleSidebarToggle} />
          <Sidebar showSidebar={showSidebar} />
        </>
      )}
      

      <div className={`content ${showSidebar ? 'content1' : ''}`}>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard-admin" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/searchjob" element={<SearchJob />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />

          <Route path='/dashboard-applicant' element={<DashboardApplicant/>} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Application />} />

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
