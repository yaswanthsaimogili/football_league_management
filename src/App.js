import { BrowserRouter, Routes, Route } from "react-router-dom";
import AvailableVenue from './AvailableVenue';
import AdminNavbar from "./components/AdminNavbar";
import AdminHome from "./AdminHome";
import Teams from "./Teams";
import Venue from "./Venue";
import Refree from "./Refree";
import About from "./About";
import Event from "./Event";
import ViewEvent from "./ViewEvent";
import Footer from "./components/Footer";
import { Container, Navbar } from "react-bootstrap";
import UserNavbar from "./components/UserNavbar";
import AddVenue from "./AddVenue";
import AddTeam from "./AddTeam";
import Urls from "./components/Urls";
function App() {
  return (
    <BrowserRouter>
    <AdminNavbar/>
   
    <Routes>
      <Route path="/home" element={<AdminHome/>}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/addteam" element={<AddTeam />}></Route>
      <Route path="/edit/:id" element={<AddTeam />}></Route>
      <Route path="/venue" element={<AvailableVenue />}></Route>
      <Route path="/refree" element={<Refree />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Event" element={<Event/>}></Route>
      <Route path="/ViewEvent" element={<ViewEvent/>}></Route>npm 
      </Routes>
      <Footer/>
      </BrowserRouter>
     
   
  );
}

export default App;
