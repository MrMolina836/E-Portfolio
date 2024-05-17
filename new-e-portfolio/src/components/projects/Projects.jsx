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
            <p>Each project is...</p>
          </div>
          <div className="project__grid-container">
            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>

            <div className="project__info">
              <h2>East Side Tabernacle Website</h2>
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
          <div className="project__grid-container">
            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>

            <div className="project__info">
              <h2>East Side Tabernacle Website</h2>
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
          <div className="project__grid-container">
            <div className="project__img-container">
              <img src={Me} className="project__img" alt="" />
            </div>

            <div className="project__info">
              <h2>East Side Tabernacle Website</h2>
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
