import { IoIosArrowBack } from 'react-icons/io';
import '../style/ticket.scss';
import '../style/validation.scss';
import { Link, useNavigate } from 'react-router-dom';
import Seats from '../components/seats';
import { useState } from 'react';

const cinemas = [
    { id: 1, name: "Viva Cinema" },
    { id: 2, name: "EbonyLife Cinema" }
];

function Ticket() {
    const navigate = useNavigate();
    const [selectedCinema, setSelectedCinema] = useState('');

    const [error, setError] = useState('');

    const handleBack = () => {
        navigate(-1);
    };

    const handleCinemaChange = (e) => {
        setSelectedCinema(e.target.value);
        setError('');
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!selectedCinema) {
            setError('Please select a cinema');
            return;
        }
        navigate('/checkout');
    };

    return (
        <>
            <header className="ticket">
                <nav className="ticket__nav">
                    <button onClick={handleBack} className="ticket__back-link"><IoIosArrowBack /></button>
                    <h1 className="ticket__title">Select Seats</h1>
                </nav>
            </header>
            <div className="ticket__selection">
                <p className="ticket__label">Cinema</p>
                <select 
                    className="ticket__cinema-select"
                    value={selectedCinema}
                    onChange={handleCinemaChange}
                >
                    <option value="">Select Cinema</option>
                    {cinemas.map(cinema => (
                        <option key={cinema.id} value={cinema.id}>
                            {cinema.name}
                        </option>
                    ))}
                </select>
                <div className="ticket__datetime">
                    <div>
                        <p className="ticket__label">Date</p>
                        <input
                            type="date"
                            className="ticket__date-select"
                            defaultValue={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <div>
                        <p className="ticket__label">Time</p>
                        <input
                            type="time"
                            className="ticket__time-select"
                            defaultValue={new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                            step="1800"
                            min="09:00"
                            max="23:00"
                        />
                    </div>
                </div>
                <div className="ticket__seats">
                    <Seats />  
                </div>
                {error && <p className="ticket__error">{error}</p>}
                <div className="ticket__checkout">
                   
                    <button onClick={handleCheckout} className="ticket__book-button">Checkout</button>
                </div>
            </div>
        </>
    );
}

export default Ticket;