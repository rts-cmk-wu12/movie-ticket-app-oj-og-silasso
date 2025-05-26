import '../style/seats.scss';
import { useState, useEffect } from 'react';

function Seats() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [reservedSeats, setReservedSeats] = useState([]);
    const ticketPrice = 49;

    useEffect(() => {
        const storedReservedSeats = JSON.parse(localStorage.getItem('reservedSeats')) || [];
        setReservedSeats(storedReservedSeats);
    }, []);

    const toggleSeat = (seatId) => {
        let updatedSelectedSeats;
        if (selectedSeats.includes(seatId)) {
            updatedSelectedSeats = selectedSeats.filter(id => id !== seatId);
        } else {
            updatedSelectedSeats = [...selectedSeats, seatId];
        }
        setSelectedSeats(updatedSelectedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(updatedSelectedSeats));
        localStorage.setItem('totalPrice', ((updatedSelectedSeats.length) * ticketPrice).toString());
    };

    const renderSeat = (seatId, isReserved) => {
        const isSelected = selectedSeats.includes(seatId);
        const isStoredReserved = reservedSeats.includes(seatId);
        return (
            <div
                key={seatId}
                className={`seats__seat ${isStoredReserved || isReserved ? 'reserved' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => !isStoredReserved && !isReserved && toggleSeat(seatId)}
            ></div>
        );
    };

    return (
        <div className="seats">
            <div className="seats__container">
                <span className="seats__bluelineglow"><img src="src\pic\bluelineglow.png" alt="" /></span>
                <div className="seats__row">
                    {renderSeat('1', false)}
                    {renderSeat('2', false)}
                    {renderSeat('3', false)}
                    <div className="seats__spacer"></div>
                    {renderSeat('4', false)}
                    {renderSeat('5', false)}
                    {renderSeat('6', false)}
                </div>
                <div className="seats__row">
                    {renderSeat('7', false)}
                    {renderSeat('8', false)}
                    {renderSeat('9', false)}
                    {renderSeat('10', false)}
                    <div className="seats__spacer"></div>
                    {renderSeat('11', false)}
                    {renderSeat('12', false)}
                    {renderSeat('13', false)}
                    {renderSeat('14', false)}
                </div>
                <div className="seats__row">
                    {renderSeat('15', false)}
                    {renderSeat('16', false)}
                    {renderSeat('17', false)}
                    {renderSeat('18', false)}
                    <div className="seats__spacer"></div>
                    {renderSeat('19', false)}
                    {renderSeat('20', false)}
                    {renderSeat('21', false)}
                    {renderSeat('22', false)}
                </div>
                <div className="seats__row">
                    {renderSeat('23', true)}
                    {renderSeat('24', true)}
                    {renderSeat('25', true)}
                    {renderSeat('26', true)}
                    <div className="seats__spacer"></div>
                    {renderSeat('27', true)}
                    {renderSeat('28', true)}
                    {renderSeat('29', true)}
                    {renderSeat('30', true)}
                </div>
                <div className="seats__row">
                    {renderSeat('31', true)}
                    {renderSeat('32', true)}
                    {renderSeat('33', true)}
                    {renderSeat('34', true)}
                    <div className="seats__spacer"></div>
                    {renderSeat('35', true)}
                    {renderSeat('36', true)}
                    {renderSeat('37', true)}
                    {renderSeat('38', true)}
                </div>
                <div className="seats__row">
                    {renderSeat('39', false)}
                    {renderSeat('40', false)}
                    {renderSeat('41', false)}
                    <div className="seats__spacer"></div>
                    {renderSeat('42', false)}
                    {renderSeat('43', false)}
                    {renderSeat('44', false)}
                </div>
            </div>

            <div className="seats__info">
                <div className="seats__legend">
                    <div className="seats__legend-item">
                        <div className="dot selected"></div>
                        <span>Selected</span>
                    </div>
                    <div className="seats__legend-item">
                        <div className="dot reserved"></div>
                        <span>Reserved</span>
                    </div>
                    <div className="seats__legend-item">
                        <div className="dot"></div>
                        <span>Available</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seats;