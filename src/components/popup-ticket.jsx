import IconDownload from '../pic/icons/icon-downloaded.svg?react';
import '../style/popup.scss';

function PopupTicket({ setShowPopup }) {
   const handleBackToHome = () => {
      setShowPopup(false);
    
      window.location.href = '/';
   };

   return (
      <footer>
         <section className="popup-ticket">
            <IconDownload className="popup-ticket__icon" />
            <div className="popup-ticket__content">
               <h2 className="popup-ticket__title">Your ticket has been downloaded</h2>
               <p className="popup-ticket__text">Adele is a Scottish heiress whose extremely
                  wealthy family owns estates and grounds.
                  When she was a teenager. Read More</p>

               <button className="popup-ticket__button" onClick={handleBackToHome}>
                  Back To Home
               </button>
            </div>
         </section>
      </footer>
   );
}

export default PopupTicket;
