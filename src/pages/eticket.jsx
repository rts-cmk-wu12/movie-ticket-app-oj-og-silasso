import { IoIosArrowBack } from "react-icons/io";
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
           <main></main>
            <footer>
                <Navbar />
            </footer>
        </>
    );
}

export default Settings;