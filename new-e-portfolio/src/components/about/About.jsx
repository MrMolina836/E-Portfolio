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

            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="about__details-container">
          <div className="about__details">
            <h1>About</h1>

            <p>
              I am a self-taught front-end developer with a passion for creating
              dynamic and user-friendly web experiences. Through dedication and
              continuous learning, I have mastered HTML, CSS, and JavaScript,
              and I am proficient in frameworks like React. My journey into web
              development began with a curiosity for how websites work, which
              quickly evolved into a full-fledged commitment to mastering the
              craft. I thrive on solving problems and building visually
              appealing, responsive interfaces. Eager to bring my skills to a
              collaborative and innovative team, I am excited to contribute to
              projects that push the boundaries of web technology.
            </p>

            <div className="sub__title">
              <h2>What I Do</h2>
            </div>

            <div className="about__display-container">

                <div className="display-box">
                    <div className="display__icon-title">
                        <i className="fa-solid fa-code"></i>
                        <h3>UI/UX Design</h3>
                    </div>
                </div>

                <div className="display-box">
                    <div className="display__icon-title">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <h3>App Development</h3>
                    </div>
                </div>

                <div className="display-box">
                    <div className="display__icon-title">
                        <i className="fa-solid fa-laptop-code"></i>
                        <h3>Web Development</h3>
                    </div>
                </div>

                <div className="display-box">
                    <div className="display__icon-title">
                        <i className="fa-solid fa-camera"></i>
                        <h3>Photography</h3>
                    </div>
                </div>
            </div>

            <div className="about__grid-container"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
