import React from "react"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { images } from "../../constants"
import "./Footer.scss"

const Footer = () => (
  <div className="app__wrapper app__flex">
    <div className="app__footer app__flex">
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <h2 className="">Dubaiautocare</h2>
          <p>
            Al Karama - Dubai - United Arab Emirates. <br />
            68W3+R3H Dubai - United Arab Emirates
          </p>
          <p className="app__footer-oh">Opening Hours: Mon-Sun 8AM to 6PM</p>
          <div className="app__footer-links_emercency">
            <p>Emercency 24 X 7</p>
            <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer" className="app__footer-links_whatsup">
              <BsWhatsapp />
            </a>
            <a href="tel:+971563050982" className="app__footer-links_phone" target="_blank" rel="noopener noreferrer">
              <BsTelephone />
            </a>
          </div>
        </div>
        <div className="app__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="app__footer-links_div app__footer-links_map">
          <h4>Find us on Google Map</h4>
          <a href="https://www.google.com/maps/place/25%C2%B014'49.4%22N+55%C2%B018'09.8%22E/@25.24703,55.3021678,18z/data=!4m5!3m4!1s0x0:0xfec801b0cedadcf5!8m2!3d25.2470452!4d55.3027156?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={images.mapImage} alt="Google Map Location" />
          </a>
        </div>
        <div className="app__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>

          <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer" className="app__footer-links_whatsup">
            <BsWhatsapp />
            <span>+971567558953</span>
          </a>
          <a href="tel:+971563050982" className="app__footer-links_phone" target="_blank" rel="noopener noreferrer">
            <BsTelephone />
            <span>+971563050982</span>
          </a>
          <a href="mailto:jevelalkarama@gmail.com" className="app__footer-links_email" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail />
            <span>jevelalkarama@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="app__footer-copyright" style={{ paddingBottom: "2rem", paddingTop: "2rem" }}>
        <p>@{new Date().getFullYear()} Dubaiautocare. All rights reserved.</p>
      </div>
    </div>
  </div>
)

export default Footer
