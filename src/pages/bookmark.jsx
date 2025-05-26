import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/bookmark.scss';
import Navbar from "../components/navbar";
import PopupPayment from '../components/popup-payment';

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
          <Link to="/" className="bookmark__back-link">
            <IoIosArrowBack />
          </Link>
          <h1 className="bookmark__title">Saved Plan</h1>
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
                <div key={movie.id} className="bookmark__item">
                  <Link to={`/detail/${movie.id}`} className="bookmark__card">
                    <div className="bookmark__poster">
                      <img 
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        alt={movie.title} 
                      />
                    </div>

                    <div className="bookmark__info">
                      <div className="bookmark__genres">
                        {movie.genres?.map((genre, index) => (
                          <span key={index}>
                            {genre.name}{index < movie.genres.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>

                      <h2 className="bookmark__movie-title">{movie.title}</h2>

                      <div className="bookmark__runtime">
                        <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                      </div>
                    </div>

                    <div className="bookmark__movie-rating">
                      <FaStar />
                      <span>{movie.vote_average?.toFixed(1)}</span>
                    </div>
                  </Link>

                  <section className="bookmark__form">
                    <div className="bookmark__form-group">
                      <h5 className="bookmark__form-label">Cinema</h5>
                      <select className="bookmark__input">
                        <option value="">Select cinema</option>
                        <option value="cinema1">Cinema XXI</option>
                        <option value="cinema2">CGV</option>
                        <option value="cinema3">Cinepolis</option>
                      </select>
                    </div>

                    <div className="bookmark__form-row">
                      <div className="bookmark__form-group">
                        <h5 className="bookmark__form-label">Date</h5>
                        <input type="date" className="bookmark__input" />
                      </div>
                      <div className="bookmark__form-group">
                        <h5 className="bookmark__form-label">Time</h5>
                        <input type="time" className="bookmark__input" />
                      </div>
                    </div>

                    <div className="bookmark__form-row">
                      <div className="bookmark__form-group">
                        <h5 className="bookmark__form-label">Seats</h5>
                        <input type="number" min="1" className="bookmark__input" placeholder="Number of seats" />
                      </div>
                      <div className="bookmark__form-group">
                        <h5 className="bookmark__form-label">Person</h5>
                        <input type="number" min="1" className="bookmark__input" placeholder="Number of people" />
                      </div>
                    </div>

                    <div className="bookmark__form-buttons">
                      <button type="submit" className="bookmark__submit-btn">Checkout</button>
                      <button className="bookmark__trash-btn">Trash</button>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        )}


      </main>

      <footer>
        <Navbar />
      </footer>
    </>
  );
}

export default Bookmark;
