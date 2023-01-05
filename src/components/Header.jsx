import React from "react";
import UserMenu from "./UserMenu";

const Header = () => {
    return (
        <div className="header">
            <p>Mi lista de pendientes</p>
            <UserMenu />
        </div>
    );
};

export default Header;
