import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './Navbar.css';

const Navbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="top-left">
                <i className="top-icon fab fa-facebook-square"></i>
                <i className="top-icon fab fa-twitter-square"></i>
                <i className="top-icon fab fa-pinterest-square"></i>
                <i className="top-icon fab fa-instagram-square"></i>
            </div>
            <div className="top-center">
                <div className="top-list">
                    <div className="top-list-item">
                        <Link className="link" to="/">HOME</Link>
                    </div>
                    <div className="top-list-item">
                        <Link className="link" to="/">ABOUT</Link>
                    </div>
                    <div className="top-list-item">
                        <Link className="link" to="/">CONTACT</Link>
                    </div>
                    <div className="top-list-item">
                        <Link className="link" to="/write">WRITE</Link>
                    </div>
                    <div className="top-list-item" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </div>
                </div>
            </div>
            <div className="top-right">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="top-image" src={PF + user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <div className="top-list">
                            <div className="top-list-item">
                                <Link className="link" to="/login">LOGIN</Link>
                            </div>
                            <div className="top-list-item">
                                <Link className="link" to="/register">REGISTER</Link>
                            </div>
                        </div>
                    )
                }
                 <i className="top-icon-search fas fa-search"></i>
            </div>
        </div>
    );
};

export default Navbar;