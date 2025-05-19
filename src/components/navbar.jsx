import React from 'react';
import '../style/navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { MdHomeFilled, MdExplore } from "react-icons/md";
import { BsBookmarkDashFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-icons">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <MdHomeFilled className='homeicon' />
                    </Link>

                    <Link to="/explore" className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`}>
                        <MdExplore className='exploreicon' />
                    </Link>

                    <Link to="/bookmarks" className={`nav-link ${location.pathname === '/bookmarks' ? 'active' : ''}`}>
                        <BsBookmarkDashFill className='exploreicon' />
                    </Link>

                    <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                        <IoPerson className='exploreicon' />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;