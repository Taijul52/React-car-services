import React from "react"
import { About, Footer, Header, Services, Contact, Quatation } from "./container/"
import { Navbar, Topbar } from "./components"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <Header />
      <Services />
      <Quatation />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
