import React from "react"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import "./Quatation.scss"

export const Quatation = () => {
  return (
    <div className="app__quataion ">
      <div className="app__container-ma">
        <div className="app__quataion-box">
          <h4>Contact a professional team</h4>
          <h2>Focus on your Drive and let us take care of your car problem needs.</h2>
          <div className="app__quataion-box-quote ">
            <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp />
              <span>Whatsapp</span>
            </a>
            <a href="tel:+971563050982" target="_blank" rel="noopener noreferrer">
              <BsTelephone />
              <span>Call us</span>
            </a>
            <a href="#contact">Tell Your Problems</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quatation
