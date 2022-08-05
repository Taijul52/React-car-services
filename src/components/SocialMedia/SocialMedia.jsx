import React from "react"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp />
      </a>
      <a href="tel:+971563050982" target="_blank" rel="noopener noreferrer">
        <BsTelephone />
      </a>
      <a href="#">
        <FaFacebookF />
      </a>
    </div>
  )
}

export default SocialMedia
