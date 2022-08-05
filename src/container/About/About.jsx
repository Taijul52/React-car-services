import React from "react"
import { motion } from "framer-motion"
import { IoPeopleOutline } from "react-icons/io5"
import { AiOutlineCar } from "react-icons/ai"
import { FiCheckSquare } from "react-icons/fi"
import { AppWrapper } from "../../wrapper"
import "./About.scss"

const profiles = [
  {
    title: "Happy Customers",
    description: "200",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Problems Solved",
    description: "800",
    icon: <FiCheckSquare />,
  },
  {
    title: "Vehicles Serviced",
    description: "1200",
    icon: <AiOutlineCar />,
  },
]
function About() {
  return (
    <div className="app__container-ma">
      <div className="app__about app__about-padding">
        <h2 className="app__heading">About Company</h2>
        <h4 className="app__sub-heading">
          Our team is <span>dedicated</span> and providing the <span>best service</span>.
        </h4>
        <p className="p-text-lg">
          The <span>dedicated</span> and <span>hard worker</span> minds behind our different services put a lot of effort to make the car like a new one. We offer a variety of detailing <a href="#services">services</a> for your car or truck.
        </p>

        <div className="app__profiles">
          {profiles.map((profile, index) => (
            <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.4, type: "tween" }} className="app__profiles-item" key={profile.title + index}>
              <div className="app__profiles-icon">{profile.icon}</div>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {profile.description} <span>+</span>
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {profile.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrapper(About, "about")
