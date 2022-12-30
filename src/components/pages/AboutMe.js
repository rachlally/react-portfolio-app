import React from "react";
import Image from 'react-bootstrap/Image';
import '../../styles/AboutMe.css';

function AboutMe() {
    return (
        <div className="aboutBox">
        <div className='aboutContainer'>
            <div>
                <h1 className="aboutText ">About Me</h1>
                <div className="about ">
                   
                        <Image style={{ width: '20%' }} className="aboutImg fluid" src={require(`../../assets/Headshot.png`)} alt={`Rachel's Headshot`} />
                    
                    <div>
                        <h4 className="aboutText">My name is Rachel Lally.  I am a Full-Stack Web Developer based out of White Salmon, Washington.  I am passionate about helping clients bring their vision to fruition.  I look forward to connecting!</h4>
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
}

export default AboutMe;