import React from "react";
import '../../styles/AboutMe.css';

function AboutMe() {
    return (
    <div className='container justify-content-center'>
        <h1 className=" aboutText">About Me</h1>
        <div className="about ">
            <img className="aboutImg " src={require(`../../assets/Rachel Lally.png`)} alt={`Rachel with her dog`} />
            <p className="aboutText">My name is Rachel Lally, a soon-to-be graduate of the University of Washington Full-Stack Web Development Certificate Program.   I am based out of White Salmon, Washington. I have gained experience as a front-end and back-end developer.  As a junior developer, I am motivated to continue learn and grow in this industry.</p>
        </div>
    </div>
    );
  }
  
  export default AboutMe;