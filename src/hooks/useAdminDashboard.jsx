import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function useAdminDashboard() {
    const auth = useAuthContext();
    const accessToken = auth?.accessToken;
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    let isMounted = true;
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:3001/admins/dashboard",
                    {
                        headers: {
                            authorization: `bearer ${accessToken}`,
                        },
                    }
                );
                // console.log(response.data);
                setData(response?.data);
            } catch (e) {
                console.log(e);
            } finally {
                isMounted && setIsLoading(false);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    return { isLoading, data };
}
