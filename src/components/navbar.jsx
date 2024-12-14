import React from "react";
import { MENU_OPTIONS, PARENT_ROUTE, PATHS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleNavItemClick = () => {
        console.log("click");
    };
    return (
        <nav className="flex p-5 flex-wrap justify-between items-center shadow-md border-b border-gray-200">
            <Link to={PARENT_ROUTE}>
                <div className="text-sm">🎍Baams</div>
            </Link>

            <div className="flex justify-around gap-2">
                {Object.values(MENU_OPTIONS).map((opt, i) => (
                    <Link to={PATHS[opt]} key={i}>
                        <div
                            className="cursor-pointer text-xs"
                            key={i}
                            onClick={() => handleNavItemClick(opt)}
                        >
                            {opt}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;