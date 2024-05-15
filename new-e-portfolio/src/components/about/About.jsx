import "./about.css";
import Me from "../../assets/Profile-Pic.jpg";
import Social from "../home/Social";

const About = () => {
  return (
    <>
      <section className="about__container" id="about">
        <div className="about__info">
          <div className="about__info-layout">
            <div className="about__image-container">
              <img src={Me} className="about__image" alt="" />
              <h3>Roberto Molina</h3>
            </div>

            <div className="about__info-job-title">
              <h3>Junior Frontend Developer</h3>
            </div>

            <Social />

            <div className="about__sub-container">
              <div className="mini__sub-container">
                <i className="fa-regular fa-envelope"></i>
                <div className="mini__title-detail">
                  <p>Email</p>
                  <h3>roberto.molina126@gmail.com</h3>
                </div>
              </div>
              <hr />
              <div className="mini__sub-container">
                <i className="fa-brands fa-github"></i>
                <div className="mini__title-detail">
                  <p>Github</p>
                  <h3>MrMolina836</h3>
                </div>
              </div>
              <hr />
              <div className="mini__sub-container">
                <i className="fa-solid fa-location-dot"></i>
                <div className="mini__title-detail">
                  <p>Location</p>
                  <h3>New York, NY 10010</h3>
                </div>
              </div>
            </div>

                <a href="#contact" className="btn">Contact Me</a>
            
          </div>
        </div>
        <div className="about__details-container">
            <div className="about__details">
                
                <h1>About</h1>
                    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam unde recusandae sint debitis a quidem aliquid veniam, aperiam error eius, nihil, cupiditate adipisci perferendis corporis iste magni maxime impedit.</p>
                

                <div className="sub__title">
                    <h2>What I Do</h2>
                </div>

                <div className="about__grid-container">

                </div>

            </div>
        </div>
      </section>
    </>
  );
};

export default About;
