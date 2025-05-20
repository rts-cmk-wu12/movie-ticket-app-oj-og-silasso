import { IoIosArrowBack } from "react-icons/io";
import '../style/bookmark.scss'
import Navbar from "../components/navbar";

function Bookmark() {

  return (
    <>
      <header className="bookmark">
                   <nav className="bookmark__nav">
                       <a href="/" className="bookmark__back-link"><IoIosArrowBack /></a>
                       <h1 className="bookmark__title">Bookmark</h1>
                   </nav>
               </header>
<main></main>
               <footer>
                <Navbar /> 
                </footer>
    </>


  )
}

export default Bookmark
