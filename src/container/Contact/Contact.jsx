import React, { useState, useRef } from "react"
import Select from "react-select"
import SimpleReactValidator from "simple-react-validator"

import emailjs from "@emailjs/browser"
import { BsWhatsapp, BsTelephone } from "react-icons/bs"
import { images } from "../../constants"
import { AppWrapper, MotionWrap } from "../../wrapper"

import "./Contact.scss"

const serviceOptions = [
  {
    value: "Car Window Films",
    label: "Car Window Films",
  },

  {
    value: "Car Seat cover upholstery",
    label: "Car Seat cover upholstery",
  },
  {
    value: "Car AC Gas Refill",
    label: "Car AC Gas Refill",
  },
  {
    value: "AC Repair",
    label: "AC Repair",
  },
]
const Contact = () => {
  const [, forceUpdate] = useState()
  const simpleValidator = useRef(new SimpleReactValidator())
  const [formData, setFormData] = useState({ username: "", email: "", whatsapp: "", phone: "", message: "" })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [selectedOption, setSelectedOption] = useState([])
  const [loading, setLoading] = useState(false)

  const { username, email, message, whatsapp, phone } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleChangeSelect = (e) => setSelectedOption(e || [])
  const handleSubmit = () => {
    const formValid = simpleValidator.current.allValid()
    setLoading(true)
    if (formValid) {
      const contact = {
        name: formData.username,
        email: formData.email,
        whatsapp: formData.whatsapp,
        phone: formData.phone,
        message: formData.message,
        services: selectedOption.map((option) => option.value).join(","),
      }
      emailjs.send("service_gp66ao3", "template_ahjzb8m", contact, "ph05yHhpKax2w0bnQ").then(
        (result) => {
          setIsFormSubmitted(true)
          setLoading(false)
        },
        (error) => {
          console.log(error.text)
        }
      )
    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
      setLoading(false)
    }
  }

  return (
    <>
      <h2 className="head-text">Contact or Request for a quote</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <BsWhatsapp />
          <a href="https://wa.me/971567558953" target="_blank" rel="noopener noreferrer" className="p-text">
            +971567558953
          </a>
        </div>
        <div className="app__contact-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:jevelalkarama@gmail.com" className="p-text" target="_blank" rel="noopener noreferrer">
            jevelalkarama@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+971563050982" className="p-text" target="_blank" rel="noopener noreferrer">
            +971563050982
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex app__form-group">
            <input className="p-text" type="text" placeholder="Your Full Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          {simpleValidator.current.message("name", username, "required")}
          <div className="app__flex  app__form-group">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>

          {simpleValidator.current.message("email", email, "required|email")}
          <div className="app__flex  app__form-group">
            <input className="p-text" type="text" placeholder="Your Whatsapp Number" name="whatsapp" value={whatsapp} onChange={handleChangeInput} />
          </div>
          <div className="app__flex  app__form-group">
            <input className="p-text" type="text" placeholder="Your Phone Number" name="phone" value={phone} onChange={handleChangeInput} />
          </div>
          <Select className="app__form-group app__form-group-select" placeholder="Select Service(s)" isMulti name="services" allowSelectAll={true} value={selectedOption} onChange={handleChangeSelect} options={serviceOptions} />

          {simpleValidator.current.message("services", selectedOption, "required")}
          <div className="app__flex  app__form-group">
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrapper(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg")
