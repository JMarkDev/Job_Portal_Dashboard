import axios from "axios";
import { useUpdateAuthContext } from "../context/authContext";

function useLogout() {
    const handleAuth = useUpdateAuthContext();
    const current_user = JSON.parse(localStorage.getItem("current_user"));

    const userId = current_user?.user_id;

    const logout = async () => {
        handleAuth({});
        localStorage.removeItem("email");
        localStorage.removeItem("current_user");

        try {
            const response = await axios.patch(
                `http://localhost:3001/${userId}`
            );
        } catch (error) {
            console.log(error);
        }
    };

    return logout;
}

export default useLogout;
