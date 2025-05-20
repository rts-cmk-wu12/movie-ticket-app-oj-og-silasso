import '../style/topmovies.scss';

function TopMovies() {
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching top rated movies:', error));
    }, []);

    return ( 
        <>
            <div className="movie-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </>
     );
}

export default TopMovies;