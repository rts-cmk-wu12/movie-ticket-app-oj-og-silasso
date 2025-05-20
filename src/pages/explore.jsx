import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import '../style/explore.scss';
import Navbar from "../components/navbar";
import { useState } from "react";
import { Link } from "react-router";

function Explore() {
    const [activeTab, setActiveTab] = useState('nowShowing');

    return (
        <>
            <div className="explore-container">
                <header className="explore-header">
                    <Link to="/"><IoIosArrowBack className="explore-arrow" /></Link>
                    <h1>Explore Movie</h1>
                    <IoIosSearch className="explore-search" />
                </header>
            
                <div className="explore-content">
                    <div className="explore-tabs">
                        <p className={`explore-tab ${activeTab === 'nowShowing' ? 'active' : ''}`} onClick={() => setActiveTab('nowShowing')}>Now Showing</p>
                        <p className={`explore-tab ${activeTab === 'upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('upcoming')}>Upcoming</p>
                    </div>
                </div>
                <div className="explore-movies">
                    <h1>Top Movies</h1>
                    <p>See more</p>
                </div>
            </div>
            <Navbar />
        </>
    );
}

export default Explore;