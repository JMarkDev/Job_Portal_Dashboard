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
    <div className=" flex flex-col justify-center items-center px-5 h-500 bg-white rounded">
      <h2 className='py-3 text-2xl '>Register</h2>
      <form>
      <div className="pb-3 flex flex-col">
          <label className=''>First Name</label>
          <input
          type="text"
          placeholder="first fame"
          className="bg-input_bg border border-gray-300 py-2 px-5 w-400 rounded-lg text-custom-base focus:outline-none"
          required
          autoComplete="off"
        />        
        </div>
        <div className="pb-3">
          <label className=''>Last Name</label>
          <input
            type="last_name"
            placeholder="last lame"
            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
            required
            autoComplete="off"
          />
        </div>
        <div className="pb-3">
        <label className=''>Middle Name</label>
          <input
            type="text"
            placeholder="middle name"
            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
            required
          />
        </div>
        <div className="pb-3">
        <label className=''>Email</label>
          <input
            type="text"
            placeholder="email"
            className="bg-input_bg border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
            required
          />
        </div>
        <div className="pb-3 relative flex flex-col justify-center">
          <label className=''>Password</label>  
        <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="bg-input_bg relative border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
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
            <label className=''>Confirm Password</label>
        <input
            type={showPassword ? "text" : "password"}
            placeholder="confirm password"
            className="bg-input_bg relative border border-gray-300 py-2 px-5 w-full rounded-lg text-custom-base focus:outline-none"
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
          className='bg-primary text-white py-2 px-5 rounded-lg w-full'>
          Register
          </button>
        </div>
      </form>
      <div className="footer py-3">
        <span className="footer__text text-sm  mr-3">Already have an account?</span>
        <Link to="/login" className="signup__link text-primary">
          Log In
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Register