import React from "react"
import AboutMeImg from "./Aboutme.png"
import Typed from 'react-typed';


export default function AboutMe() {
    return (
        <section className="intro--section" id="Home__Section">
            <div className="intro--text">
                <h1>Hi! <br/> I'm Jorge Chávez</h1>
                <h2 className="auto-type">
                    <Typed
                    strings={['I&#39;m a Frontend Developer', 'I&#39;m a Human', 'I&#39;m an Athlete', 'I&#39;m Passionate']}
                    typeSpeed={60}
                    backSpeed={60}
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
