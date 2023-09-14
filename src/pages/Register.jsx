import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiEye } from "react-icons/fi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className='flex justify-center items-center fixed_page bg-register-bg bg-cover bg-no-repeat'>
    <div className=" flex flex-col justify-center items-center px-5 w-400 h-500 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h2 className='text-white py-3 text-2xl '>Register</h2>
      <form>
      <div className="pb-3">
          <label className='text-white'>First Name</label>
          <input
          type="text"
          placeholder="first fame"
          className="border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white"
          required
          autoComplete="off"
        />        
        </div>
        <div className="pb-3">
          <label className='text-white'>Last Name</label>
          <input
            type="last_name"
            placeholder="last lame"
            className="border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white "
            required
            autoComplete="off"
          />
        </div>
        <div className="pb-3">
        <label className='text-white'>Middle Name</label>
          <input
            type="text"
            placeholder="middle name"
            className="border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white"
            required
          />
        </div>
        <div className="pb-3">
        <label className='text-white'>Email</label>
          <input
            type="text"
            placeholder="email"
             className="border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white"
            required
          />
        </div>
        <div className="pb-3 relative flex flex-col justify-center">
          <label className='text-white'>Password</label>  
        <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="relative border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white"
            required
          />
          {showPassword ? (
            <FiEye className="fa eye absolute right-0 mt-6 mr-3" onClick={togglePasswordVisibility} />
          ) : (
            <AiOutlineEyeInvisible
              className="fa eye absolute right-0 mt-6 mr-3"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        
        <div className="pb-3 input_group relative">
            <label className='text-white'>Confirm Password</label>
        <input
            type={showPassword ? "text" : "password"}
            placeholder="confirm password"
            className=" relative border placeholder:text-white border-gray-300 py-2 px-5 w-full rounded-full text-custom-base bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 focus:outline-none text-white"
            required
          />
          {showPassword ? (
            <FiEye className="fa eye absolute right-0 -mt-7 mr-3" onClick={togglePasswordVisibility} />
          ) : (
            <AiOutlineEyeInvisible
              className="fa eye absolute right-0 -mt-7 mr-3"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <div className="button_group" id="login_button">
          <button type="submit" 
          className='bg-primary text-white py-2 px-5 rounded-full w-full'>
          Register
          </button>
        </div>
      </form>
      <div className="footer py-3">
        <span className="footer__text text-sm text-white mr-3">Already have an account?</span>
        <Link to="/login" className="signup__link text-white">
          Log In
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register