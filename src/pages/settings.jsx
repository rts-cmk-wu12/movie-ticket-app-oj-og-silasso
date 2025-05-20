import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../style/settings.scss'
import Navbar from "../components/navbar";

function Settings() {
    return (
        <>
            <header className="settings">
                <nav className="settings__nav">
                    <a href="/" className="settings__back-link"><IoIosArrowBack /></a>
                    <h1 className="settings__title">Settings</h1>
                </nav>
            </header>
            <main className="settings__main">
                <section className="settings__section">
                    <article className="settings__profile settings__article">
                        <div className="settings__profile-info">
                            <img src="src/pic/bruger.png" alt="bruger" className="settings__profile-image" />
                            <h3 className="settings__profile-name">Miles Morales
                                <span className="settings__profile-role">Film Hunter</span>
                            </h3>
                        </div>
                        <IoIosArrowForward className="settings__arrow" />
                    </article>
                    <article className="settings__account settings__article">
                        <h2 className="settings__account-title">Account</h2>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/personaldata.svg" alt="Personal data icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Personal Data</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/emailpayment.svg" alt="Email and payment icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Email & Payment</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/deactiveaccount.svg" alt="Deactivate account icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Deactive Account</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                    </article>
                    <article className="settings__privacy settings__article">
                        <h2 className="settings__privacy-title">Privacy & Policy</h2>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/notification.svg" alt="Notification icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Notification</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/yourticket.svg" alt="Ticket icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Your Ticket</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                        <div className="settings__menu-item">
                            <div className="settings__menu-content">
                                <img src="src/pic/logout.svg" alt="Logout icon" className="settings__menu-icon" />
                                <p className="settings__menu-text">Logout</p>
                            </div>
                            <IoIosArrowForward className="settings__arrow" />
                        </div>
                    </article>
                </section>
            </main>
            <footer>
                <Navbar />
            </footer>
        </>
    );
}

export default Settings;