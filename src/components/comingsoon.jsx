import { useState, useEffect } from 'react';
import '../style/movies.scss';
import { useNavigate } from 'react-router-dom';

const API_KEY = '30eb2436721e0aa49634943c649145f6';
const BASE_URL = 'https://api.themoviedb.org/3';
const UPCOMING_URL = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const MovieSlideshow = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(UPCOMING_URL);
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };

    return (
        <div className="movie-slideshow-container">
            <div className="slideshow-content">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-slide-item" onClick={() => handleMovieClick(movie.id)}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className='movie-info'>
                            <h3 className="movie-title">{movie.title}</h3>
                            <p>{new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>    );
};

export default MovieSlideshow;