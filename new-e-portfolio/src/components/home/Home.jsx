import React from "react"
import Social from "./Social"
import "./home.css"
import Me from "../../assets/Profile-Pic.jpg"
import Scroll from "./Scroll"


const Home = () => {
    return ( 
            <section className="home__container" id="home">
                <div className="home__intro">
                    <div className="img__container">
                        <img src={Me} alt="" className="home__img" />
                    </div>
                    <div className="home__name">
                        <h1>Roberto Molina</h1>
                    </div>

                    <div className="home__job-title">I'm a Junior Frontend Developer</div>

                    <Social />
                    
                    <a href="#about" className="btn">Hire Me</a>

                    <Scroll />
                </div>
            </section>
    )
};

export default Home