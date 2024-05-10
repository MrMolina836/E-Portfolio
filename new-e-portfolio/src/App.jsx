import React from "react";
import Home from "./components/home/Home.jsx"


const App = () => {
    return(
        <>
            <Sidebar />
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>

        </>
    )
}

export default App