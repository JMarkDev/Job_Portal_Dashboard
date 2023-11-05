import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsFillBuildingFill } from "react-icons/bs";
import { BiSolidDashboard, BiLogOut } from "react-icons/bi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { AiFillPieChart, AiFillSetting } from "react-icons/ai";
import PropTypes from "prop-types";
import useLogout from "../hooks/useLogout";

const Sidebar = ({ showSidebar }) => {
    Sidebar.propTypes = {
        showSidebar: PropTypes.bool.isRequired,
    };

    const logout = useLogout();
    const navigate = useNavigate();
    const sidebarClasses = `sidebar flex ${
        showSidebar ? "hide-links" : ""
    } items-center flex-col`;
    const sidebarIcons = [
        {
            icon: <BiSolidDashboard />,
            text: "Dashboard",
            link: "/admin-dashboard",
        },
        { icon: <BsSearch />, text: "Search Job", link: "/admin-searchjob" },
        {
            icon: <BsFillBuildingFill />,
            text: "Companies",
            link: "admin-companies",
        },
        {
            icon: <IoExtensionPuzzle />,
            text: "Application",
            link: "/admin-application",
        },
        {
            icon: <AiFillPieChart />,
            text: "Statistics",
            link: "/admin-statistics",
        },
        { icon: <AiFillSetting />, text: "Settings", link: "/admin-settings" },
        { icon: <BiLogOut />, text: "Logout", link: "/login" },
    ];

    async function userLogout() {
        await logout();
        navigate("/login");
    }

    return (
        <div className="fixed">
            <div className={sidebarClasses}>
                <h1 className="text-4xl text-center pt-4 font-serif text-white font-semibold">
                    JobHunt
                </h1>
                <ul className="pt-10 text-lg text-white flex flex-col">
                    {sidebarIcons.map((item, index) =>
                        item.text === "Logout" ? (
                            <li key={index}>
                                <a
                                    href="#"
                                    onClick={userLogout}
                                    className="pl-10 p-3 w-250 flex items-center hover:text-white gap-3"
                                >
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </a>
                            </li>
                        ) : (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    className="pl-10 p-3 w-250 flex items-center hover:text-white gap-3"
                                >
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {showSidebar && (
                <div className="hide__sidebar">
                    <h1 className="pt-4 text-4xl text-center font-serif text-white font-semibold">
                        JH
                    </h1>
                    <ul className="pt-10 text-lg text-white flex flex-col justify-center items-center">
                        {sidebarIcons.map(
                            (item, index) =>
                                item.text === "Logout" ? (
                                    <li
                                        className="flex justify-center items-center p-4"
                                        key={index}
                                        onClick={userLogout}
                                    >
                                        {item.icon}
                                    </li>
                                ) : (
                                    <li
                                        className="flex justify-center items-center p-4"
                                        key={index}
                                    >
                                        <Link
                                            to={item.link}
                                            className="flex items-center hover:text-white"
                                        >
                                            {item.icon}
                                        </Link>
                                    </li>
                                )
                            // <li
                            //     className="flex justify-center items-center p-4"
                            //     key={index}
                            // >
                            //     <Link
                            //         to={item.link}
                            //         className="flex items-center hover:text-white"
                            //     >
                            //         {item.icon}
                            //     </Link>
                            // </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
