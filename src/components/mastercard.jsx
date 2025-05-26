import '../style/mastercard.scss';

function Mastercard() {
    return (
        <>
            <div className="checkout__card">
                <div className="card blue-card">
                    <div className="card__logo">
                        <img src="src\pic\icons\mastercard.png" alt="Mastercard" />
                    </div>
                    <div className="card__number">
                        <span className="label">Balance</span>
                        <span className="value">$120,580,00</span>

                    </div>
                    <div className="card__details">
                        <div className="card__holder">
                            <span className="label">Card Holder</span>
                            <span className="value">Miles Morales</span>
                        </div>
                        <div className="card__balance">
                            <span>**** **** **** 51146</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mastercard;