import { motion } from "framer-motion"
import React from "react"
import { images } from "../../constants"
import { AppWrapper } from "../../wrapper"
import "./Header.scss"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
}
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.4 }} className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, we offer </p>
              <h1 className="head-text">best Repair Services</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              Car <span> Battery Supply </span>
            </p>
            <p className="p-text">
              <span>Battery Replace and Repair</span>
            </p>
            <p className="p-text">Car windows Film</p>
            <p className="p-text">Car Seat cover upholstery</p>
            <p className="p-text"> Car AC Gas Refill</p>
            <p className="p-text">AC Repair.</p>
          </div>
        </div>
      </motion.div>
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.4, delayChildren: 0.4 }} className="app__header-img">
        <img src={images.heroBanner} alt="Hero banner" />
        <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }} src={images.circle} className="app__header-overlay-circle" alt="Hero Overlay banner" />
      </motion.div>
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
        {[images.audi, images.bmw, images.toyota, images.honda].map((brand, index) => (
          <div className="brand-cmp app__flex" key={`brand-${index}`}>
            <img src={brand} alt="Cars Brand" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header, "home")
