import axios from "axios";
import { useUpdateAuthContext } from "../context/authContext";

function useRefreshToken() {
    const handleAuth = useUpdateAuthContext();
    const data = { email: localStorage.getItem("email") };
    const current_user = JSON.parse(localStorage.getItem("current_user"));

    const refresh = async () => {
        const response = await axios.post(
            "http://localhost:3001/users/refresh",
            data
        );

        handleAuth({
            user: current_user,
            accessToken: response?.data?.accessToken,
        });

        return response?.data?.accessToken;
    };

    return refresh;
}

export default useRefreshToken;
