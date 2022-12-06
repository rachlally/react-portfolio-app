import React from "react";
import Image from 'react-bootstrap/Image';
import '../../styles/AboutMe.css';

function AboutMe() {
    return (
        <div className='aboutContainer'>
            <h1 className="aboutText ">About Me</h1>
            <div className="about ">
                <div>
                    <Image style={{width: '80%'}} className="aboutImg fluid" src={require(`../../assets/Rachel Lally.png`)} alt={`Rachel with her dog`} />
                </div>
                <div>
                    <p className="aboutText">My name is Rachel Lally, a soon-to-be graduate of the University of Washington Full-Stack Web Development Certificate Program.   I am based out of White Salmon, Washington. I have gained experience as a front-end and back-end developer.  As a junior developer, I am motivated to continue learn and grow in this industry.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;