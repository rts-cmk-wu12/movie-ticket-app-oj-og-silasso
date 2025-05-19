import '../style/cinema.scss';
import { useNavigate } from 'react-router-dom';
import Viva from '../pic/viva.png';
import Ebonylife from '../pic/ebonylife.png';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const cinemas = [
    {
        id: 1,
        distance: "5,2 Kilometers",
        name: "Viva Cinema",
        description: "Closed 10.00 PM",
        image: Viva,
        rating: "4,9"
    },
    {
        id: 2,
        distance: "6,5 Kilometers",
        name: "EbonyLife Cinema",
        description: "Closed 09.00 PM",
        image: Ebonylife,
        rating: "5,0"
    }
];

const PopularMovies = () => {
    const navigate = useNavigate();

    const handleCinemaClick = (cinemaId) => {
        navigate(`/cinema/${cinemaId}`);
    };

    return (
        <div className="cinema-container">
            <div className="cinemas-grid">
                {cinemas.map((cinema) => (
                    <div key={cinema.id} className="cinema-card" onClick={() => handleCinemaClick(cinema.id)}>
                        <div className="cinema-card-inner">
                            <div className="cinema-image-wrapper">
                                <img
                                    src={cinema.image}
                                    alt={cinema.name}
                                    className="cinema-image"
                                />
                            </div>
                            <div className='cinema-content'>
                                <div className='cinema-details'>
                                    <div className='cinema-info'>
                                        <p className="cinema-distance"><FaMapMarkerAlt className='distance-logo' /> {cinema.distance}</p>
                                        <h3 className="cinema-name">{cinema.name}</h3>
                                        <div className='cinema-description-box'>
                                            <p className="cinema-description">{cinema.description}</p>
                                        </div>
                                    </div>
                                    <p className="cinema-rating"><FaStar className='rating-logo' /> {cinema.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMovies;