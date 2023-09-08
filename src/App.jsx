import Dashboard from "./pages/Dashboard"
import { Routes, Route, Navigate} from "react-router-dom"
import Application from "./pages/Application"
import SearchJob from "./pages/SearchJob"
import Companies from "./pages/Companies"
import Statistics from "./pages/Statistics"
import Settings from "./pages/Settings"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false); 

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
    document.body.classList.toggle('hide-sidebar');
  } 

    return (
      <>
        <Sidebar showSidebar={showSidebar}/>
        <Navbar showSidebar={showSidebar} handleSidebarToggle={handleSidebarToggle} />
        <div className={`content ${showSidebar ? 'content1' : ''}`}>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard'/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/application" element={<Application />} />
            <Route path="/searchjob" element={<SearchJob />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
          
      </>
    )
  }


export default App
