import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Introduction from "./Components/Introduction/Introduction";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";

import Footer from "./Components/Footer/Footer.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main--container">
        <Introduction />
        <hr id="About__Section"/>
        <AboutMe />
        <hr id="Portfolio__Section"/>
        <Portfolio />
      </main>
      <Footer />
      
    </>
    
  );
}