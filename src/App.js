import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./components/Login/Head";
import { Routes, Route } from 'react-router-dom';
import Home from './components/collage login/Home';
import About from './components/collage login/About';
import Agenda from './components/collage login/Agenda';
import Feedback from "./components/collage login/Feedback";
import Gallery from './components/collage login/Gallery';
import PendingFees from './components/collage login/PendingFees';
import Visit from './components/collage login/Visit'
import Footers from "./components/Login/Footers";
import Login from "./components/Login/Login";
import Visitform from "./components/collage login/Visitform";
import Registration from "./components/Login/Registration";

function App() {
  
  return (
    <>
    
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/head" element={<Head/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/schedule" element={<Visit/>} />
      <Route path="/addvisit" element={<Visitform/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/agenda" element={<Agenda/>} />
      <Route path="/fees" element={<PendingFees/>} />
      <Route path="/newRegister" element={<Registration/>} />
      </Routes>
     
      {/* <Footers /> */}
    </>
  );
}

export default App;
