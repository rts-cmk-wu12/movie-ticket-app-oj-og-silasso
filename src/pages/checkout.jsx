import { Link, useNavigate } from 'react-router';
import '../style/checkout.scss';
import { IoIosArrowBack } from 'react-icons/io';
import Mastercard from '../components/mastercard';

function Checkout() {
    const navigate = useNavigate();
    const totalPrice = localStorage.getItem('totalPrice') || '0';

    const handleBack = () => {
        navigate(-1);
    };
    return (
        <>
            <header className="checkout-header">
                <nav className="checkout__nav">
                    <Link to='/' onClick={handleBack} className="checkout-link"><IoIosArrowBack /></Link>
                    <h1 className="checkout__title">Checkout</h1>
                </nav>
            </header>
            <div className="checkout__container">
                <div className="checkout__paymenttext">
                    <h2>Payment Method</h2>
                    <p>Change</p>
                </div>
                <Mastercard />
                <div className="checkout__payment-details">
                    <label>Your Email</label>
                    <input type="email" placeholder="Milesmorales@gmail.com" />
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="Miles Morales" />
                    <label>Card Number</label>
                    <input type="text" placeholder="**** **** **** 51446" />
                    <div className="checkout__date-cvv">
                        <div className="checkout__date">
                            <label>Date</label>
                            <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div className="checkout__cvv">
                            <label>CVV</label>
                            <input type="number" placeholder="123" />
                        </div>
                    </div>
                    <button className="checkout__pay-button">
                        pay now <span>|</span> ${totalPrice}
                    </button>
                </div>
            </div>        </>
    );
}

export default Checkout;