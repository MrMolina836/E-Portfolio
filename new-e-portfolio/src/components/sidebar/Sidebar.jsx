import React from "react"
import "./sidebar.css"

const Sidebar = () => {
    return(
        <>
            <div className="sidebar__container">
                

                <nav className="nav">
                    <div className="nav__menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#home" className="nav__link">
                                        <i className="icon-home"></i>
                                        <p>Home</p>
                                    </a>
                                </li>
                                
                                <li className="nav__item">
                                    <a href="#about" className="nav__link">
                                        <i className="icon-user"></i>
                                        <p>About</p>
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#projects" className="nav__link">
                                        <i className="icon-screen-desktop"></i>
                                        <p>Projects</p>
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a href="#contact" className="nav__link">
                                        <i className="icon-bubbles"></i>
                                        <p>Contact</p>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </nav>

                
            </div>
        </>
    )
}

export default Sidebar