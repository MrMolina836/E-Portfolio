import React from "react"
import Social from "./Social"
import "./home.css"


const Home = () => {
    return(
        <>
            <section className="home__container" id="home">
                <div className="home__intro">
                    <img src="" alt="" className="home__img" />
                    <div className="home__name">
                        <h1>Roberto Molina</h1>
                    </div>
                    <span className="home__job-title">I'm a Junior Frontend Developer</span>
                    <Social />
                    <a href="#contact" className="btn">Hire Me</a>
                </div>
            </section>

        </>
    )
}

export default Home