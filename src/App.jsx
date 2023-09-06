
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from './Title/TitlePage';
import MemePage from './Meme-Generator/MemePage';
import AirbnbPage from './AirBnb-Clone/AirbnbPage';
import PetsPage from "./Pets-Props/PetsPage";
import BoxesPage from "./Boxes/BoxesPage";
import JokesPage from "./Setup-Punchlines/JokesPage";
import FormPage from "./react-forms/FormPage";
import WindowTrackerPage from "./Window-Tracker/WindowTrackerPage";
import TitlePageMain from "./Title/TitlePageMain";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TitlePageMain/>} />
        <Route path="/meme-generator" element={<MemePage/>} />
        <Route path="/airbnb-clone" element={<AirbnbPage/>}/>
        <Route path="/pets-props" element={<PetsPage/>}/>
        <Route path="/boxes" element={<BoxesPage/>}/>
        <Route path="/setup-punchlines" element={<JokesPage/>}/>
        <Route path="/react-forms" element={<FormPage/>}/>
        <Route path="/window-tracker" element={<WindowTrackerPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
