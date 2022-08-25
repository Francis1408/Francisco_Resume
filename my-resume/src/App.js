import logo from './logo.svg';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Portifolios from './components/Portifolios';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/skills" element={<Skills/>} />
            <Route path="/experiences" element={<Experiences/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/portifolios" element={<Portifolios/>} />
          </Route>  
        </Routes>   
      </>
    </Router>
  );
}

export default App;
