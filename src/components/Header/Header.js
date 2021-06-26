import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-tittles">
                <span className="header-tittle-small">React & Node</span>
                <span className="header-tittle-large">Blog</span>
            </div>
            {/* <img className="header-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpfMGCfU0frSa4xsp31m5irELqnlZ_U-5Jg&usqp=CAU" alt="" /> */}
        </div>
    );
};

export default Header;