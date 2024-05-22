import React from "react"
import "./sidebar.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return(
        <>
            <div className="sidebar__container">
                

                <nav className="nav">
                    <div className="nav__menu">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <NavLink to="/home" className="nav__link">
                                        <i className="icon-home"></i>
                                        <p>Home</p>
                                    </NavLink>
                                </li>
                                
                                <li className="nav__item">
                                    <NavLink to="/about" className="nav__link">
                                        <i className="icon-user"></i>
                                        <p>About</p>
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink to="/projects" className="nav__link">
                                        <i className="icon-screen-desktop"></i>
                                        <p>Projects</p>
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink to="/contact" className="nav__link">
                                        <i className="icon-bubbles"></i>
                                        <p>Contact</p>
                                    </NavLink>
                                </li>
                            </ul>
                    </div>
                </nav>

                
            </div>
        </>
    )
}

export default Sidebar