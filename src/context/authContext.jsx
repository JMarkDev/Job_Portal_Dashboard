import { useContext, useState, createContext } from "react";

const authContext = createContext();
const updateAuthContext = createContext();

export function useAuthContext() {
    return useContext(authContext);
}

export function useUpdateAuthContext() {
    return useContext(updateAuthContext);
}

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});

    function handleAuth(data) {
        setAuth(data);
    }

    return (
        <authContext.Provider value={auth}>
            <updateAuthContext.Provider value={handleAuth}>
                {children}
            </updateAuthContext.Provider>
        </authContext.Provider>
    );
}
