import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h3>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1>Food Order</h1>
            </div>
            <div></div>
        </nav>
    );
};

export default Navbar;