import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useAuthContext } from "../context/authContext";

function PersistLogin() {
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const refresh = useRefreshToken();
    const auth = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (e) {
                if (e?.response?.status === 422) {
                    navigate("/not-found");
                }
            } finally {
                setIsLoading(false);
            }
        };
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [isLoading]);

    return (
        <>
            {isEmpty ? (
                navigate("/not-found")
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                <Outlet />
            )}
        </>
    );
}

export default PersistLogin;
