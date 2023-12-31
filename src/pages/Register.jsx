import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import axios from "axios";
import { useUpdateAuthContext } from "../context/authContext";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();
    const [error, setError] = useState({});
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [disableBTN, setDisableBTN] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function handleRegister(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        if (!data.otp || !token) {
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:3001/applicants/register",
                data,
                {
                    headers: {
                        authorization: `bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                alert(response.data?.message);
                navigate("/login");
            }
        } catch (e) {
            if (e?.response?.status === 403) {
                setError(e.response?.data?.error);
            } else if (e?.response?.status === 422) {
                setError(e.response?.data?.error);
            }
        }
    }

    async function handleOTP() {
        const EMAIL = emailRef.current.value;

        const data = { email: EMAIL };

        try {
            setDisableBTN(true);
            const response = await axios.post(
                "http://localhost:3001/applicants/send_otp",
                data
            );
            if (response.status === 200) {
                setToken(response?.data?.otp_token);
                alert(response?.data?.message);
                setDisableBTN(false);
            }
        } catch (e) {
            const RESPONSE = e.response;
            setDisableBTN(true);
            if (RESPONSE) {
                setError(RESPONSE?.data?.error);
                setDisableBTN(false);
            }
        }
    }

    return (
        <div className="flex justify-center items-center fixed_page bg-register-bg bg-cover bg-no-repeat">
            <div className=" flex flex-col justify-center items-center px-5 h-500 bg-white rounded">
                <h2 className="py-3 text-2xl ">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="pb-3 flex flex-col">
                        <label className="">First Name</label>
                        <p className="text-[red]">{error?.first_name}</p>
                        <input
                            type="text"
                            placeholder="first fame"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="first_name"
                        />
                    </div>
                    <div className="pb-3">
                        <label className="">Last Name</label>
                        <p className="text-[red]">{error?.last_name}</p>
                        <input
                            type="last_name"
                            placeholder="last lame"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="last_name"
                        />
                    </div>
                    <div className="pb-3">
                        <label className="">Middle Name</label>
                        <input
                            type="text"
                            placeholder="middle name"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                            name="middle_name"
                        />
                    </div>
                    <div className="pb-3">
                        <label className="">Email</label>
                        <p className="text-[red]">{error?.email}</p>
                        <input
                            type="text"
                            placeholder="email"
                            name="email"
                            ref={emailRef}
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                        />
                    </div>

                    <div className="pb-3">
                        <label className="">OTP</label>
                        <p className="text-[red]">{error?.otp}</p>
                        <input
                            type="text"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                            name="otp"
                        />
                        <button
                            onClick={() => handleOTP()}
                            disabled={disableBTN}
                            className={
                                disableBTN
                                    ? "bg-btn"
                                    : "bg-primary text-white py-2 px-5 my-2 rounded-lg"
                            }
                        >
                            {disableBTN ? "loading..." : "SEND OTP"}
                        </button>
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

                    <div className="pb-3 input_group relative">
                        <label className="">Confirm Password</label>
                        <p className="text-[red]">
                            {error?.password_confirmation}
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="confirm password"
                            name="password_confirmation"
                            className="bg-input_bg relative border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                        />
                        {showPassword ? (
                            <FiEye
                                className="fa eye absolute right-0 -mt-7 mr-3"
                                onClick={togglePasswordVisibility}
                            />
                        ) : (
                            <AiOutlineEyeInvisible
                                className="fa eye absolute right-0 -mt-7 mr-3"
                                onClick={togglePasswordVisibility}
                            />
                        )}
                    </div>
                    <div className="button_group" id="login_button">
                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-5 rounded-lg w-full"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="footer py-3">
                    <span className="footer__text text-sm  mr-3">
                        Already have an account?
                    </span>
                    <Link to="/login" className="signup__link text-primary">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
