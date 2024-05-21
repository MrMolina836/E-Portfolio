import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <div className="contact__layout">
        <div className="contact__title">
          <h1>Get in touch</h1>
          <p>
            I’m excited to connect with you! If you have any questions,
            opportunities, or just want to chat, please reach out through the
            contact section. I look forward to hearing from you and discussing
            how we can collaborate.
          </p>
        </div>

        <div className="contact__form-container">
          <form action="" className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                className="contact__form-input"
                cols="30"
                rows={10}
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button className="contact__btn">Submit <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};


