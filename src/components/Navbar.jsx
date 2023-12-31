import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import adminImg from "../assets/img/download.jpg";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuthContext } from "../context/authContext";

const pageTitles = {
    "/admin-dashboard": "Dashboard",
    "/admin-application": "Application",
    "/admin-searchjob": "Search Job",
    "/admin-companies": "Companies",
    "/admin-statistics": "Statistics",
    "/admin-settings": "Settings",
};

const Navbar = ({ showSidebar, handleSidebarToggle }) => {
    const auth = useAuthContext();
    const user = auth?.user;
    const location = useLocation();
    const pageTitle = pageTitles[location.pathname];

    Navbar.propTypes = {
        showSidebar: PropTypes.bool.isRequired,
        handleSidebarToggle: PropTypes.func.isRequired,
    };

    return (
        <div
            className={`navbar ${
                showSidebar ? "navbar_show" : ""
            }  flex items-center justify-between fixed z-10 top-0 right-0`}
        >
            <div className="burger flex pl-8 justify-center items-center">
                <RxHamburgerMenu
                    onClick={handleSidebarToggle}
                    className="text-3xl font-bold burger_icon"
                />
                <h1 className="text-xl font-bold ml-7 sm:block hidden">
                    {pageTitle}
                </h1>
            </div>
            <div className="flex justify-center items-center lg:gap-10 gap-5 relative">
                <div className="relative lg:block hidden">
                    <input
                        type="text"
                        placeholder="Search something here..."
                        className="p-2 rounded-full pl-2 pr-20"
                    />
                    <BsSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>

                <IoIosNotifications className="text-5xl bg-white rounded-full p-3 text-gray-700" />
                <div className="flex ">
                    <img
                        src={adminImg}
                        alt="admin"
                        className="w-10 h-10 rounded-full mr-8"
                    />
                    <div className="mr-10 lg:block hidden">
                        <h1 className="font-bold">{`${user?.first_name} ${user?.last_name}`}</h1>
                        <p className="text-sm text-gray-600">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
