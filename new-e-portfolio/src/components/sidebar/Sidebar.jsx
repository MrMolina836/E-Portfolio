import React from "react"
import "./sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
        <>
            <div className="sidebar__container">
                

                <nav className="nav">
                    <div className="nav__menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link to="/home" className="nav__link">
                                        <i className="icon-home"></i>
                                        <p>Home</p>
                                    </Link>
                                </li>
                                
                                <li className="nav__item">
                                    <Link to="/about" className="nav__link">
                                        <i className="icon-user"></i>
                                        <p>About</p>
                                    </Link>
                                </li>

                                <li className="nav__item">
                                    <Link to="/projects" className="nav__link">
                                        <i className="icon-screen-desktop"></i>
                                        <p>Projects</p>
                                    </Link>
                                </li>

                                <li className="nav__item">
                                    <Link to="/contact" className="nav__link">
                                        <i className="icon-bubbles"></i>
                                        <p>Contact</p>
                                    </Link>
                                </li>
                            </ul>
                    </div>
                </nav>

                
            </div>
        </>
    )
}

export default Sidebar