import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/bookmark.scss'
import Navbar from "../components/navbar";

function Bookmark() {
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

    useEffect(() => {
   
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setBookmarkedMovies(bookmarks);
    }, []);

    return (
      <>
        <header className="bookmark">
                     <nav className="bookmark__nav">
                         <Link to="/" className="bookmark__back-link"><IoIosArrowBack /></Link>
                         <h1 className="bookmark__title">Bookmark</h1>
                     </nav>
                 </header>
        <main className="bookmark__main">
          {bookmarkedMovies.length === 0 ? (
            <div className="bookmark__empty">
              <p>No bookmarked movies yet</p>
            </div>
          ) : (
            <div className="bookmark__container">
              <div className="bookmark__list">
                {bookmarkedMovies.map(movie => (
                  <Link to={`/detail/${movie.id}`} key={movie.id} className="bookmark__item">
                    {movie.bookmarkedDate && (
                      <div className="bookmark__date">
                        <span>{movie.bookmarkedDate}</span>
                      </div>
                    )}
                    <div className="bookmark__poster">
                      <img 
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt={movie.title} 
                      />
                      
                    
                      <div className="bookmark__details"> 
                         <div className="bookmark__genres">
                          {movie.genres?.map((genre, index) => (
                            <span key={index} className="bookmark__genre">
                              {genre.name}{index < movie.genres.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </div>
                        <div className='bookmark__movie'>
                        <h2 className="bookmark__movie-title">{movie.title}</h2>
                       
                        <div className="bookmark__movie-rating">
                          <FaStar />
                          <span>{movie.vote_average?.toFixed(1)}</span>
                        </div>
                       </div>
                        <div className="bookmark__runtime">
                          <span>{movie.runtime} min</span>
                        </div>
                      </div>
                    </div>

                    <section>
                      <div> 
                        <h5>Cinema</h5>
                        <input type="text" />
                      </div>
                     
                      <div>
                        <div>
                          <h5>Date</h5>
                          <input type="text" />
                        </div>
                        <div>
                          <h5>Time</h5>
                          <input type="text" />
                        </div>
                      </div>

                      <div>
                        <div>
                          <h5>Seats</h5>
                          <input type="text" />
                        </div>
                        <div>
                          <h5>Person</h5>
                          <input type="text" />
                        </div>
                      </div>
                      <button type='submit'>Checkout</button>
                      <button>Trash</button>
                    </section>
                  
                  </Link>
                ))}
              </div>
            </div>
          )}


        </main>
        <footer>
          <Navbar /> 
        </footer>
      </>
    )
}

export default Bookmark