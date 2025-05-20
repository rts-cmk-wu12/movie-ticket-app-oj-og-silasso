import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import '../style/detail.scss';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsBookmarkDash } from "react-icons/bs";


const Detail = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const [director, setDirector] = useState("");
    const API_KEY = '8c9bb1fd937a32001ededb5432e9e153';
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => setMovieDetail(data));

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const director = data.crew.find(member => member.job === "Director");
                setDirector(director ? director.name : "");
            });
    }, [id, API_KEY]);

    return (
        <>
            <header className="detail-header">
                <div className="detail-header-container">
                    <Link to="/"><IoIosArrowBack className="detail-header-arrow" /></Link>
                    <div className="detail-header-title">
                        <h1 className="detail-header-title-text">Details Movie</h1>
                    </div>
                    <BsBookmarkDash className="detail-bookmark-icon" />
                </div>
            </header>
            {movieDetail.poster_path && (
                <div className="poster-container">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
                        alt={movieDetail.title}
                        className="detail-poster"
                        />
                </div>
            )}
            <div className="detail-container">
                <div className="detail-content">
                    <div className="detail-info">
                        <div className="detail-header-content">
                            <h1 className="detail-title">{movieDetail.title}</h1>
                            <div className="detail-header-info">
                                <p className="detail-director">Director: {director} </p>
                                <div className="detail-rating">
                                    <span>|</span>  <FaStar />
                                    <p>{movieDetail.vote_average?.toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                        <div className='detail-tags'>
                            {movieDetail.genres?.map((genre, index) => (
                                <p key={index}>{genre.name}</p>
                            ))}<p>{movieDetail.runtime} min</p>
                        </div>
                        <h2>Synopsis</h2>
                        <p className="detail-overview">{movieDetail.overview?.slice(0, 150)}... <span className="see-more">Read More</span></p>
                    </div>
                </div>
            </div>
            <div className="book-ticket-container">
                <button className="book-ticket-button">Book Ticket</button>
            </div>
        </>
    );
};

export default Detail;