import { BsSearch } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineComment } from 'react-icons/ai'
import { IoIosNotifications } from 'react-icons/io'
import adminImg from '../assets/img/download.jpg'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/application': 'Application',
  '/searchjob': 'Search Job',
  '/companies': 'Companies',
  '/statistics': 'Statistics',
  '/settings': 'Settings',
};

const Navbar = ({showSidebar,  handleSidebarToggle}) => {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname];

  Navbar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    handleSidebarToggle: PropTypes.func.isRequired,
  }

  return (
    <div className='nav'>
       <div className={`navbar ${showSidebar ? 'navbar_show' : ''}  flex items-center justify-between fixed z-10 top-0 right-0`}>
        <div className="burger flex pl-8 justify-center items-center">
          <RxHamburgerMenu onClick={handleSidebarToggle} className='text-3xl font-bold burger_icon'/>
          <h1 className='text-xl font-bold ml-7'>{pageTitle}</h1>
        </div>   
        <div className='flex justify-center items-center space-x-10 relative'>
        <div className="relative">
          <input
            type='text'
            placeholder='Search something here...'
            className='p-2 rounded-full pl-2 pr-20' // Add left and right padding
          />
          <BsSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </div>
            <AiOutlineComment className='text-5xl bg-white rounded-full p-3 text-gray-700'/>
            <IoIosNotifications className='text-5xl bg-white rounded-full p-3 text-gray-700'/>
            <div className='flex '>
              <img src={adminImg} alt='admin' className='w-10 h-10 rounded-full mr-8' />
              <div className='mr-10'>
                <h1 className='font-bold'>Seroy Cute</h1>
                <p className='text-sm text-gray-600'>Admin</p>
              </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default Navbar

