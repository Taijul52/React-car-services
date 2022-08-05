import React from "react"

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "services", "about", "contact"].map((item, index) => (
        <li className="app__flex p-text" key={item + index}>
          <a href={`#${item}`} className="app__navigation-dot" style={active === item ? { backgroundColor: "#313BAC" } : {}} />
        </li>
      ))}
    </div>
  )
}

export default NavigationDots
