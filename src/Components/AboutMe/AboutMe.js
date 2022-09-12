import React from "react"
import CV from "./CVJorgeChávezFrontend.pdf"

export default function AboutMe() {
    return (
        
        <section className="aboutme--section" >
            <h1 >About Me</h1>
            <div className="Skills--Expertise">
                <div>
                    <h3>Skills</h3>
                    <p>Frontend Related</p>
                    <span className="skill--flags">HTML5</span>
                    <span className="skill--flags">CSS3</span>
                    <span className="skill--flags">Javascript</span>
                    <span className="skill--flags">ReactJS</span>
                    <span className="skill--flags">GIT</span>
                    <span className="skill--flags">Bootstrap</span>
                    <span className="skill--flags">APIs</span>
                    <br/>
                    <p>Other Softwares</p>
                    <span className="skill--flags">Photoshop</span>
                    <span className="skill--flags">AutoCAD</span>
                    <span className="skill--flags">Sketchup</span>
                    <span className="skill--flags">Google Earth</span>
                    <span className="skill--flags">MS Office</span>
                    <br/>
                    <p>Lenguages proficiency</p>
                    <span className="skill--flags">Native Spanish</span>
                    <span className="skill--flags">Advanced English</span>
                </div>
                <div className="div--about">
                    <h3>About</h3>
                    <p>I'm a Web developer with a strong passion in solving challenges and finding the easiest solution possible. I'm all about process optimization. </p>
                    <p>I'm an autodidact with 1000+ hours of coding and learning from different sources to learn new languages while sharpening existing skills.</p>
                    <p>I have a Civil Engineering background where I learned that the efficiency is all when you need to deliver a product.</p>
                    <a href={CV} download>
                        <button className="button--cv">
                            Download CV
                        </button>
                    </a>
                </div>
                
            </div>
        </section>
    )
}
