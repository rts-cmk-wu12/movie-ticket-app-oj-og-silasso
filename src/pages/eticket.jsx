import { IoIosArrowBack } from "react-icons/io";
import '../style/eticket.scss';
import '../style/popup.scss';
import Navbar from "../components/navbar";
import { useState } from "react";
import PopupTicket from "../components/popup-ticket";

function ETicket() {
    const [showPopup, setShowPopup] = useState(false);
    const reservedSeats = JSON.parse(localStorage.getItem('reservedSeats')) || [];
    const selectedCinema = localStorage.getItem('selectedCinema') || '';
    const today = new Date().toLocaleDateString('da-DK');
    const currentTime = new Date().toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' });
    const orderId = Math.floor(Math.random() * 9000000) + 1000000;
    const movieTitle = localStorage.getItem('movieTitle') || 'Unknown Movie';
    return (
        <>
            <div className={`wrapper ${showPopup ? 'overlay' : ''}`}>


                <header className="eticket">
                    <nav className="eticket__nav">
                        <a href="/" className="eticket__nav-back">
                            <IoIosArrowBack />
                        </a>
                        <h1 className="eticket__nav-title">E-Ticket</h1>
                    </nav>
                </header>

                <main className="eticket-content">
                    <section className="eticket-content__instruction">
                        <h1 className="eticket-content__instruction-title">Instruction</h1>
                        <p className="eticket-content__instruction-text">
                            Come to the cinema, show and scan the barcode to the space provided.
                            Continue to comply with health protocols.
                        </p>
                    </section>

                    <section className="eticket-content__details">
                        <div className="eticket-content__ticket">
                            <div className="eticket-content__film">
                                <h5 className="eticket-content__film-title">
                                    Film: {movieTitle}
                                </h5>
                                <p className="eticket-content__film-name">e-ticket</p>
                            </div>
                            <div className="eticket-content__info">

                                <ul className="eticket-content__info-list">
                                    <li className="eticket-content__info-item">
                                        <p>Date <span className="eticket-content__info-value">{today}</span></p>
                                    </li>
                                    <li className="eticket-content__info-item">
                                        <p>Seats <span className="eticket-content__info-value">{reservedSeats.join(', ')}</span></p>
                                    </li>
                                    <li className="eticket-content__info-item">
                                        <p>Location <span className="eticket-content__info-value">{selectedCinema}</span></p>
                                    </li>
                                    <li className="eticket-content__info-item">
                                        <p>Time <span className="eticket-content__info-value">{currentTime}</span></p>
                                    </li>
                                    <li className="eticket-content__info-item">
                                        <p>Payment <span className="eticket-content__info-value">Successful</span></p>
                                    </li>
                                    <li className="eticket-content__info-item">
                                        <p>Order <span className="eticket-content__info-value">{orderId}</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="eticket-content__qrcode">

                            <svg width="250" height="66" viewBox="0 0 250 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.33331H21.1667V58.3333H16V8.33331ZM26.3333 8.33331H28.9167V58.3333H26.3333V8.33331ZM31.5 8.33331H36.6667V58.3333H31.5V8.33331ZM39.25 8.33331H44.4167V58.3333H39.25V8.33331ZM47 8.33331H52.1667V58.3333H47V8.33331ZM54.75 8.33331H57.3333V58.3333H54.75V8.33331ZM59.9167 8.33331H67.6667V58.3333H59.9167V8.33331Z" fill="black" />
                                <path d="M126.833 8.33331H132V58.3333H126.833V8.33331ZM137.167 8.33331H139.75V58.3333H137.167V8.33331ZM142.333 8.33331H147.5V58.3333H142.333V8.33331ZM150.083 8.33331H155.25V58.3333H150.083V8.33331ZM157.833 8.33331H163V58.3333H157.833V8.33331ZM165.583 8.33331H168.167V58.3333H165.583V8.33331ZM170.75 8.33331H178.5V58.3333H170.75V8.33331Z" fill="black" />
                                <path d="M71.8335 8H77.0002V58H71.8335V8ZM82.1668 8H84.7502V58H82.1668V8ZM87.3335 8H92.5002V58H87.3335V8ZM95.0835 8H100.25V58H95.0835V8ZM102.833 8H108V58H102.833V8ZM110.583 8H113.167V58H110.583V8ZM115.75 8H123.5V58H115.75V8Z" fill="black" />
                                <path d="M182.667 8H187.834V58H182.667V8ZM193 8H195.584V58H193V8ZM198.167 8H203.334V58H198.167V8ZM205.917 8H211.084V58H205.917V8ZM213.667 8H218.834V58H213.667V8ZM221.417 8H224V58H221.417V8ZM226.584 8H234V58H226.584V8Z" fill="black" />
                            </svg>

                        </div>
                        <div className="eticket-content__button">  <button className="download-button" onClick={setShowPopup}>Download E-Ticket</button></div>

                    </section>
                </main>
            </div>
            <footer className="eticket__footer">
                <Navbar />
            </footer>

            <div className={`popup-container ${showPopup ? 'show' : ''}`}>
                {showPopup && <PopupTicket />}
            </div>
        </>
    );
} export default ETicket;