import { Link } from "react-router-dom"
import {  BsSearch, BsFillBuildingFill } from 'react-icons/bs'
import { BiSolidDashboard } from 'react-icons/bi'
import { IoExtensionPuzzle } from 'react-icons/io5'
import { AiFillPieChart, AiFillSetting } from 'react-icons/ai'
import PropTypes from 'prop-types';

const Sidebar = ({showSidebar}) => {

    Sidebar.propTypes = {
      showSidebar: PropTypes.bool.isRequired, 
    };
    

  return (
    <>
    <div className="fixed">
      <div className={`sidebar flex ${showSidebar ? 'hide-links' : ''} items-center flex-col`}> 
      <h1 className="text-4xl text-center pt-4 font-serif text-white font-semibold">JobHunt</h1>
          <ul className="pt-10 text-lg text-white flex flex-col justify-start items-start">
              <li className="flex justify-center items-center p-3">
                  <Link to="/dashboard" className="flex items-center hover:text-white">
                  <BiSolidDashboard className="mr-4 text-2xl"/>
                  Dashboard
                  </Link>
              </li>
              <li className="flex justify-center items-center p-3">
                  <Link to="/searchjob" className="flex items-center hover:text-white">
                  <BsSearch className="mr-4 text-2xl"/>
                  Search Job
                  </Link>
              </li>
              <li className="flex justify-center items-center p-3">
                  <Link to="/companies" className="flex items-center hover:text-white">
                  <BsFillBuildingFill className="mr-4 text-2xl"/>
                  Companies
                  </Link>
              </li>
              <li className="flex justify-center items-center p-3">
                  <Link to="/application" className="flex items-center hover:text-white">
                  <IoExtensionPuzzle className="mr-4 text-2xl"/>
                  Application
                  </Link>
              </li>
              <li className="flex justify-center items-center p-3">
                  <Link to="/statistics" className="flex items-center hover:text-white">
                  <AiFillPieChart className="mr-4 text-2xl"/>
                  Statistics
                  </Link>
              </li>
              <li className="flex justify-center items-center p-3">
                  <Link to="/settings" className="flex items-center hover:text-white">
                  <AiFillSetting className="mr-4 text-xl"/>
                  Settings
                  </Link>
              </li>
          </ul>
      </div>
          { showSidebar &&
        <div className="hide__sidebar">
            <h1 className="pt-4 text-4xl text-center font-serif text-white font-semibold ">JH</h1>
            <ul className="pt-10 text-lg text-white flex flex-col justify-center items-center">
          <li className="flex justify-center items-center p-4">
              <Link to="/dashboard" className="flex items-center hover:text-white">
              <BiSolidDashboard className="text-2xl"/>
              </Link>
          </li>
          <li className="flex justify-center items-center p-4">
              <Link to="/searchjob" className="flex items-center hover:text-white">
              <BsSearch className="text-2xl"/>
              </Link>
          </li>
          <li className="flex justify-center items-center p-3">
              <Link to="/companies" className="flex items-center hover:text-white">
              <BsFillBuildingFill className="text-2xl"/>
              </Link>
          </li>
          <li className="flex justify-center items-center p-3">
              <Link to="/application" className="flex items-center hover:text-white">
              <IoExtensionPuzzle className="text-2xl"/>
              </Link>
          </li>
          <li className="flex justify-center items-center p-3">
              <Link to="/statistics" className="flex items-center hover:text-white">
              <AiFillPieChart className=" text-2xl"/>
              </Link>
          </li>
          <li className="flex justify-center items-center p-3">
              <Link to="/settings" className="flex items-center hover:text-white">
              <AiFillSetting className="text-xl"/>
              </Link>
          </li>
            </ul>
          </div>
          }
    </div>
    </>
  )
}

export default Sidebar
