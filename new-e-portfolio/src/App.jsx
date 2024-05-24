import React from "react";
import { Home } from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";
import {Contact} from "./components/contact/Contact";
import { NavLink } from "react-router-dom"
import { BrowserRouter, Route , Routes } from "react-router-dom";




function App(){
    return(
        <>
            <Sidebar />
            <main className="main">
                <Routes>
                    <Route path="/Home" id="home" element={<Home />}></Route>
                    <Route path="/About" id="about" element={<About />}></Route>
                    <Route path="/Projects" element={<Projects />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                </Routes>
            </main>
        </>
    )
}

export default App

