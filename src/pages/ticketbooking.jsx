import { IoIosArrowBack } from 'react-icons/io';
import '../style/ticket.scss';

function Ticket() {
    return ( 
        <>
         <header className="ticket">
                <nav className="ticket__nav">
                    <a href="/" className="ticket__back-link"><IoIosArrowBack /></a>
                    <h1 className="ticket__title">Select Seats</h1>
                </nav>
            </header>
        </>
     );
}

export default Ticket;