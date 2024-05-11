import React from "react";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


const App = () => {
    return(
        <>
            <Sidebar />
            <main className="main">
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default App