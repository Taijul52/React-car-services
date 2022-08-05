import React, { useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { motion } from "framer-motion"

import "./Topbar.scss"
const Topbar = () => {
  return (
    <div className="app__topbar app__topbar-mobile">
      <div className="app__topbar-social-links">
        <p>Emercency 24 X 7</p>
        <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer" className="app__topbar-links_whatsup">
          <BsWhatsapp />
          <span>+971567558953</span>
        </a>

        <a href="tel:+971563050982" className="app__topbar-links_phone" target="_blank" rel="noopener noreferrer">
          <BsTelephone />
          <span>+971563050982</span>
        </a>
      </div>
      <div className="app__topbar-open-hours">
        <p>Opening Hours: Mon-Sun 8AM to 6PM</p>
      </div>
    </div>
  )
}

export default Topbar
