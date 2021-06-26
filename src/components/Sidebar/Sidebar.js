import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-tittle">ABOUT ME</span>
                <img 
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" 
                    alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis at vel eveniet praesentium cum fugit error, dicta tempora sint.    
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-tittle">CATEGORIES</span>
                <div className="sidebar-list">
                    {
                        cats.map((c) => (
                                <Link to={`/?cat=${c.name}`} className="link">
                                    <li className="sidebar-list-item">{c.name}</li>
                                </Link>
                            )
                        )
                    }
                    {/* <div className="sidebar-list-item">Life</div>
                    <div className="sidebar-list-item">Music</div>
                    <div className="sidebar-list-item">Style</div>
                    <div className="sidebar-list-item">Sport</div>
                    <div className="sidebar-list-item">Tech</div>
                    <div className="sidebar-list-item">Cinema</div> */}
                </div>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-tittle">FOLLOW US</span>
                <div className="sidebar-social"> 
                    <i className="sidebar-icon fab fa-facebook-square"></i>
                    <i className="sidebar-icon fab fa-twitter-square"></i>
                    <i className="sidebar-icon fab fa-pinterest-square"></i>
                    <i className="sidebar-icon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;