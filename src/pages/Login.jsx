import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import axios from "axios";
import { useUpdateAuthContext } from "../context/authContext";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const handleAuth = useUpdateAuthContext();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function handleLoginUser(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post(
                "http://localhost:3001/users/login",
                data
            );

            if (response.status == 200) {
                const user = response.data?.user;
                const accessToken = response.data?.accessToken;
                console.log(user);
                if (user && accessToken) {
                    localStorage.setItem("email", user?.email);
                    localStorage.setItem("current_user", JSON.stringify(user));
                    handleAuth({ user, accessToken });

                    if (user?.role === "applicant") {
                        navigate("/applicant-dashboard", { replace: true });
                    } else {
                        navigate("/admin-dashboard", { replace: true });
                    }
                }
                setError({});
                setMessage([]);
            }
        } catch (e) {
            console.log(e);
            setError(e.response?.data?.error);
            if (e.response?.data?.msg && !e.response.data?.error) {
                setMessage(e.response?.data?.msg);
            } else {
                setMessage(null);
            }
        }
    }
    return (
        <div className="flex justify-center items-center fixed_page bg-register-bg bg-cover bg-no-repeat">
            <div className=" flex flex-col justify-center items-center px-5 bg-white rounded">
                <h2 className="py-3 text-2xl mb-10">Login</h2>
                <p>{message ? message : ""}</p>
                <form onSubmit={handleLoginUser}>
                    <div className="pb-3 flex flex-col">
                        <label className="">Email</label>
                        <p className="text-[red]">{error?.email}</p>
                        <input
                            type="text"
                            placeholder="email"
                            name="email"
                            className="w-400 bg-input_bg border border-gray-300 py-2 px-5 rounded-lg text-custom-base focus:outline-none"
                        />
                    </div>
                    <div className="pb-3 relative flex flex-col justify-center">
                        <label className="">Password</label>
                        <p className="text-[red]">{error?.password}</p>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            className="bg-input_bg relative border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                        />
                        {showPassword ? (
                            <FiEye
                                className="fa eye absolute right-0 mt-6 mr-3"
                                onClick={togglePasswordVisibility}
                            />
                        ) : (
                            <AiOutlineEyeInvisible
                                className="fa eye absolute right-0 mt-6 mr-3"
                                onClick={togglePasswordVisibility}
                            />
                        )}
                    </div>
                    <div className="button_group" id="login_button">
                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-5 rounded-lg w-full"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="footer py-3">
                    <span className="footer__text text-sm  mr-3">
                        Don't have an account?
                    </span>
                    <Link to="/register" className="text-primary">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
