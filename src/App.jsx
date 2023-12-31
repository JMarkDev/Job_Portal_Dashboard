import { useState } from "react";
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
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppliedJobs from "./pages/Applicant/AppliedJobs";
import Profile from "./pages/Applicant/Profile";
import DashboardApplicant from "./pages/Applicant/DashboardApplicant";
import ApplicantSettings from "./pages/Applicant/ApplicantSettings";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PersistLogin from "./components/PersistLogin";
import RegisterAdmin from "./pages/Admin/RegisterAdmin";
import RegisterEmployer from "./pages/Admin/RegisterEmployer";

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    const validPath = [
        "/admin-dashboard",
        "/admin-application",
        "/admin-searchjob",
        "/admin-companies",
        "/admin-statistics",
        "/admin-settings",
    ];

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
        document.body.classList.toggle("hide-sidebar");
    };

    return (
        <>
            {validPath.includes(location.pathname) && (
                <>
                    <Navbar
                        showSidebar={showSidebar}
                        handleSidebarToggle={handleSidebarToggle}
                    />
                    <Sidebar showSidebar={showSidebar} />
                </>
            )}

            <div className={`content ${showSidebar ? "content1" : ""}`}>
                <Routes>
                    <Route path="/register" element={<Register />} />

                    <Route path="/login" element={<Login />} />

                    <Route element={<PersistLogin />}>
                        <Route
                            element={
                                <ProtectedRoutes allowedRoles={["admin"]} />
                            }
                        >
                            <Route
                                path="/register-admin"
                                element={<RegisterAdmin />}
                            ></Route>
                            <Route
                                path="/register-employer"
                                element={<RegisterEmployer />}
                            ></Route>
                            <Route
                                path="/admin-dashboard"
                                element={<Dashboard />}
                            />
                            <Route
                                path="/admin-application"
                                element={<Application />}
                            />
                            <Route
                                path="/admin-searchjob"
                                element={<SearchJob />}
                            />
                            <Route
                                path="/admin-companies"
                                element={<Companies />}
                            />
                            <Route
                                path="/admin-statistics"
                                element={<Statistics />}
                            />
                            <Route
                                path="/admin-settings"
                                element={<Settings />}
                            />
                        </Route>
                        <Route
                            element={
                                <ProtectedRoutes allowedRoles={["applicant"]} />
                            }
                        >
                            <Route
                                path="/applicant-dashboard"
                                element={<DashboardApplicant />}
                            />
                            <Route
                                path="/applicant-applied-jobs"
                                element={<AppliedJobs />}
                            />
                            <Route
                                path="/applicant-profile"
                                element={<Profile />}
                            />
                            <Route
                                path="/applicant-settings"
                                element={<ApplicantSettings />}
                            />
                        </Route>
                    </Route>

                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
