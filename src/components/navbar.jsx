import React from 'react';
import '../style/navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../pic/icons/home.svg?react';
import ExploreIcon from '../pic/icons/explore.svg?react';
import BookmarkIcon from '../pic/icons/bookmark.svg?react';
import PersonIcon from '../pic/icons/person.svg?react';



const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-icons">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                     <HomeIcon />
                    </Link>

                    <Link to="/explore" className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`}>
                        <ExploreIcon />
                    </Link>

                    <Link to="/bookmarks" className={`nav-link ${location.pathname === '/bookmarks' ? 'active' : ''}`}>
                        <BookmarkIcon />
                    </Link>

                    <Link to="/settings" className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}>
                        <PersonIcon />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;