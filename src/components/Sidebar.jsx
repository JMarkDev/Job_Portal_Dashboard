import { Link } from 'react-router-dom';
import {  BsSearch, BsFillBuildingFill } from 'react-icons/bs'
import { BiSolidDashboard, BiLogOut } from 'react-icons/bi'
import { IoExtensionPuzzle } from 'react-icons/io5'
import { AiFillPieChart, AiFillSetting } from 'react-icons/ai'
import PropTypes from 'prop-types';

const Sidebar = ({ showSidebar }) => {
  Sidebar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
  };

  const sidebarClasses = `sidebar flex ${showSidebar ? 'hide-links' : ''} items-center flex-col`;
  const sidebarIcons = [
    { icon: <BiSolidDashboard />, text: 'Dashboard', link: '/dashboard-admin' },
    { icon: <BsSearch />, text: 'Search Job', link: '/searchjob' },
    { icon: <BsFillBuildingFill />, text: 'Companies', link: '/companies' },
    { icon: <IoExtensionPuzzle />, text: 'Application', link: '/application' },
    { icon: <AiFillPieChart />, text: 'Statistics', link: '/statistics' },
    { icon: <AiFillSetting />, text: 'Settings', link: '/settings' },
    { icon: <BiLogOut />, text: 'Logout', link: '/login' },
  ];

  return (
    <div className="fixed">
      <div className={sidebarClasses}>
        <h1 className="text-4xl text-center pt-4 font-serif text-white font-semibold">JobHunt</h1>
        <ul className="pt-10 text-lg text-white flex flex-col justify-start items-start">
          {sidebarIcons.map((item, index) => (
            <li className="flex justify-center items-center p-3" key={index}>
              <Link to={item.link} className="flex items-center hover:text-white gap-3">
                <span className='text-2xl'>{item.icon}</span>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {showSidebar && (
        <div className="hide__sidebar">
          <h1 className="pt-4 text-4xl text-center font-serif text-white font-semibold">JH</h1>
          <ul className="pt-10 text-lg text-white flex flex-col justify-center items-center">
            {sidebarIcons.map((item, index) => (
              <li className="flex justify-center items-center p-4" key={index}>
                <Link to={item.link} className="flex items-center hover:text-white">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
