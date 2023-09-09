import Dashboard from "./pages/Dashboard"
import { Routes, Route, Navigate, useLocation} from "react-router-dom"
import Application from "./pages/Application"
import SearchJob from "./pages/SearchJob"
import Companies from "./pages/Companies"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { useState } from 'react'
import Pagenotfound from "./pages/Pagenotfound"

function App() {
  const [showSidebar, setShowSidebar] = useState(false); 
  const location = useLocation();
  const validPath = ['/dashboard', '/application', '/searchjob', '/companies', '/statistics', '/settings'];

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
    document.body.classList.toggle('hide-sidebar');
  } 

    return (
      <>
      {validPath.includes(location.pathname) && <Navbar showSidebar={showSidebar} handleSidebarToggle={handleSidebarToggle} />}
      {validPath.includes(location.pathname) && <Sidebar showSidebar={showSidebar} />}
  
        <div className={`content ${showSidebar ? 'content1' : ''}`}>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/application" element={<Application />} />
            <Route path="/searchjob" element={<SearchJob />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
          
      </>
    )
  }


export default App
