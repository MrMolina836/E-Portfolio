import React from "react"

const Scroll = () => {
    return(
        <>
            <div className="scroll__down">
                <a href="#about" className="mouse__container">
                    <span className="scroll__name">Scroll Down</span>
                    <span className="mouse">
                        <span className="wheel"></span>
                    </span>
                </a>
            </div>
        </>
    )
}

export default Scroll 