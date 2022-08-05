import React from "react"
import { motion } from "framer-motion"

import { AppWrapper } from "../../wrapper"
import { images } from "../../constants"
import "./Services.scss"
const services = [
  {
    name: "Car Battery Supply",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.batteryReplace,
  },
  {
    name: "Car Battery Repair and Replace",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.batteryRepair,
  },
  {
    name: "Car windows Film",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.carwindow,
  },
  {
    name: "Car Seat cover upholstery",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.sitcover,
  },
  {
    name: "Car AC Gas Refill",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.acgasfill,
  },
  {
    name: "AC Repair",
    description: "Window film is a thin laminate film that can be installed to the interior or exterior of glass surfaces in automobiles and boats and also to the interior or exterior of glass in homes and buildings.",
    image: images.acrepair,
  },
]

function Services() {
  return (
    <div className="app__container-ma">
      <div className="app__about app__section-padding">
        <h2 className="app__heading">
          <span>WHAT WE DO</span>
        </h2>
        <h4 className="app__sub-heading">One stop solution for clean and neet of your cars</h4>
        <p className="p-text-lg">
          At Company Name you’ll find everything you need to keep your car neat and clean including <span>Car AC Gas Refill</span> and <span>AC Repair</span>. We also <span>Supply</span> and <span>Repair Batteries</span> and provide 100% <span>Replacement</span> guarantee. This is all backed up by our team of highly-skilled technicians who provide the best Automotive car services in <span>Dubai</span> at a <span>competitive price.</span>
        </p>
        <div className="app__services">
          {services.map((service, index) => (
            <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.4, type: "tween" }} className="app__services-item" key={service.name + index}>
              <img src={service.image} alt={service.name + index} width="800" height="420" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {service.name}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrapper(Services, "services")
