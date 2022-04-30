import React from 'react'
import Teams from '../Teams';
import AddTeam from '../AddTeam';
import AdminHome from "../AdminHome";
import Refree from "../Refree";
import About from "../About";
import Event from "../Event";
import ViewEvent from "../ViewEvent";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import AddRefree from '../AddRefree';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Venues from '../Venue';
import AddVenue from '../AddVenue';

function Routing() {
  return (
    <BrowserRouter>
    <AdminNavbar/>
   <Routes>
      <Route path="/home" element={<AdminHome/>}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/addteam" element={<AddTeam />}></Route>
      <Route path="/editTeam/:id" element={<AddTeam />}></Route>
      <Route path="/addvenue" element={<AddVenue />}></Route>
      <Route path="/venue" element={<Venues/>}></Route>
      <Route path="/refree" element={<Refree />}></Route>
      <Route path="/addRefree" element={<AddRefree />}></Route>
      <Route path="/editRefree/:id" element={<AddRefree />}></Route>

      <Route path="/About" element={<About />}></Route>
      <Route path="/Event" element={<Event/>}></Route>
      <Route path="/ViewEvent" element={<ViewEvent/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
  )
}

export default Routing