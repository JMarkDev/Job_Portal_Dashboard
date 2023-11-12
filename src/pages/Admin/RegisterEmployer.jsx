import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import axios from "axios";
import { useAuthContext } from "../../context/authContext";

const RegisterEmployer = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const auth = useAuthContext();
    const accessToken = auth?.accessToken;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    async function handleRegister(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post(
                "http://localhost:3001/employers/register",
                data,
                {
                    headers: {
                        authorization: `bearer ${accessToken}`,
                    },
                }
            );

            if (response?.status === 200) {
                alert(response?.data?.msg);
                window.location.reload(true);
            }
        } catch (e) {
            console.log(e.response?.data?.error);
            setError(e.response?.data?.error);
        }
    }

    return (
        <div className="">
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
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
                        />
                    </div>
                    <div className="pb-3 flex flex-col">
                        <label className="">Mobile No.</label>
                        <p className="text-[red]">{error?.mobile_no}</p>
                        <input
                            type="text"
                            placeholder="Mobile No."
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="mobile_no"
                        />
                    </div>
                    <div className="pb-3 flex flex-col">
                        <label className="">Telephone No.</label>
                        <p className="text-[red]">{error?.telephone_no}</p>
                        <input
                            type="text"
                            placeholder="Telephone No."
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="telephone_no"
                        />
                    </div>
                    <div className="pb-3 flex flex-col">
                        <label className="">Company Name</label>
                        <p className="text-[red]">{error?.company_name}</p>
                        <input
                            type="text"
                            placeholder="company name"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="company_name"
                        />
                    </div>
                    <div className="pb-3 flex flex-col">
                        <label className="">Company Url</label>
                        <input
                            type="text"
                            placeholder="Company Url"
                            className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
                            autoComplete="off"
                            name="company_url"
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
                <div className="footer py-3"></div>
            </div>
        </div>
    );
};

export default RegisterEmployer;
