import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
    return (
        <div className="not_found-page bg-not-found-bg">
            <div className="not_found bg-not-found-bg flex flex-col justify-center items-center ">
                <h1 className="text-150 font-black text-notfound-color mt-20">
                    404
                </h1>
                <h2 className="text-40 text-notfound-color">
                    {" "}
                    The page you were looking for is not found!
                </h2>
                <p className="text-notfound-p">
                    You may have mistyped the address or the page may have
                    moved.
                </p>
                <Link
                    to="/login"
                    className="mt-5 text-white bg-primary p-2 px-4 rounded-lg"
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Pagenotfound;
