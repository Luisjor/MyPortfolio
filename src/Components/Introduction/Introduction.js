import React from "react"
import AboutMeImg from "./Aboutme.png"
import Typed from 'react-typed';


export default function AboutMe() {
    return (
        <section className="intro--section" id="Home__Section">
            <div className="intro--text">
                <h1>Hi! <br/> I'm Jorge Chávez</h1>
                <h2 className="auto-type">
                    I'm a
                    <Typed
                    strings={[' Frontend Developer', ' Human', 'n Athlete', ' Passionate']}
                    typeSpeed={75}
                    backSpeed={75}
                    loop
                /></h2>
                <p>Web developer engineer with a strong focus in details. <br/>
                I always love a good challenge.</p>
                <button className="contactme--button">
                    <a aria-current="page" href="#Contactme__Section">Contact Me</a>
                </button>
            </div>
            <img src={AboutMeImg} alt="MyPhoto" />
        </section>
    )
}
