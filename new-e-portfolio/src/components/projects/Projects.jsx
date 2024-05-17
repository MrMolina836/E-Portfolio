import React from "react";
import "./projects.css";
import Me from "../../assets/Profile-Pic.jpg";

const Projects = () => {
  return (
    <>
      <div className="project__container" id="projects">
        <div className="project__layout">
          <div className="project__title">
            <h1>Projects</h1>
            <p>Each project is a unique piece of development <i class="fa-solid fa-puzzle-piece"></i></p> 
          </div>
          <div className="project__grid-container">
            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>

            <div className="project__info">
              <h2>East Side Tabernacle Website <i class="fa-solid fa-church"></i></h2>
              <p>
                Working on creating a church website as a frontend developer was
                a fulfilling experience. Using HTML for structure, CSS for
                styling, and JavaScript for interactivity, I built a responsive
                and user-friendly site. Integrating UI/UX principles ensured an
                intuitive and welcoming design. Through problem-solving, I
                addressed challenges like optimizing load times and ensuring
                cross-browser compatibility, resulting in a seamless user
                experience.
              </p>
              <div className="project__info-skills">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT</p>
              </div>
              <div className="project__info-btn">
                <a href="" className="project__links">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project__grid-container">
            <div className="project__info">
              <h2>Rossey's Bakery <i class="fa-solid fa-cake-candles"></i></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                nihil modi id hic! Tempore qui tenetur dolores inventore, ipsum
                similique error ipsa corrupti deserunt a! Inventore minus
                impedit tempore pariatur?
              </p>
              <div className="project__info-btn">
                <a href="https://github.com/MrMolina836/Rossys-Bakery" target="blank" className="project__links">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>
          </div>
          <div className="project__grid-container">
            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>

            <div className="project__info">
              <h2>Code Lumos <i class="fa-solid fa-moon"></i></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                nihil modi id hic! Tempore qui tenetur dolores inventore, ipsum
                similique error ipsa corrupti deserunt a! Inventore minus
                impedit tempore pariatur?
              </p>
              <div className="project__info-btn">
                <a href="" className="project__links">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
