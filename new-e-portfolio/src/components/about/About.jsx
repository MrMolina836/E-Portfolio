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
                <i className="fa-regular fa-envelope"></i>
                <div className="mini__title-detail">
                  <p>Email</p>
                  <h3>roberto.molina126@gmail.com</h3>
                </div>
              </div>
              <hr />
              <div className="mini__sub-container">
                <i className="fa-regular fa-envelope"></i>
                <div className="mini__title-detail">
                  <p>Email</p>
                  <h3>roberto.molina126@gmail.com</h3>
                </div>
              </div>
              <hr />
            </div>

            <div className="about__btn-container">
                <a href="">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="about__details"></div>
      </section>
    </>
  );
};

export default About;
