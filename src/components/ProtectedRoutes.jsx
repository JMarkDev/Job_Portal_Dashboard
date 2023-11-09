import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function ProtectedRoutes({ allowedRoles }) {
    const auth = useAuthContext();
    const location = useLocation();
    return allowedRoles?.includes(auth?.user?.role) ? (
        <Outlet />
    ) : auth?.user ? (
        <Navigate to="/not-found" />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}
