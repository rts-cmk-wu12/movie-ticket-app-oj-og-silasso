import { Routes, Route } from 'react-router-dom';
import Forside from './pages/index.jsx';
import Detail from './pages/detail.jsx';
import './style/index.scss';
import Settings from './pages/settings.jsx';
import Explore from './pages/explore.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>


  )
}

export default App
