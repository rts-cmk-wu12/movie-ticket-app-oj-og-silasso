import { useState, useEffect } from 'react';
import '../style/recommended.scss';
import { useNavigate } from 'react-router-dom';

function Recommended() {
    const API_KEY = '8c9bb1fd937a32001ededb5432e9e153';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const RECOMMENDED_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(RECOMMENDED_URL);
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };

    return (
        <div className="recommended-movies-wrapper">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="recommended-card" onClick={() => handleMovieClick(movie.id)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="recommended-image"
                        />
                        <div className='recommended-details'>
                            <h3 className="recommended-heading">{movie.title}</h3>
                            <p className="rating">Rating: {movie.vote_average}/10</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>    
    );
}

export default Recommended;