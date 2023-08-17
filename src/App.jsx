
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from './Title/TitlePage';
import MemePage from './Meme-Generator/MemePage';
import AirbnbPage from './AirBnb-Clone/AirbnbPage';
import PetsPage from "./Pets-Props/PetsPage";
import BoxesPage from "./Boxes/BoxesPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TitlePage/>} />
        <Route path="/meme-generator" element={<MemePage/>} />
        <Route path="/airbnb-clone" element={<AirbnbPage/>}/>
        <Route path="/pets-props" element={<PetsPage/>}/>
        <Route path="/boxes" element={<BoxesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
