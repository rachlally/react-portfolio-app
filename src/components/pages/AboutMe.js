import React from "react";
import Image from 'react-bootstrap/Image';
import '../../styles/AboutMe.css';

function AboutMe() {
    return (
        <div>
            <h1 className="aboutText">About Me</h1>
            <div className="about ">

                <Image style={{ width: '20%' }} className="aboutImg fluid" src={require(`../../assets/Headshot.png`)} alt={`Rachel's Headshot`} />

                <div className="blurb">
                    <h4 className="aboutText ">Hello!  My name is Rachel Lally, a Full-Stack Web Developer based out of White Salmon, Washington. <br/> <br/>With a background in high-end Hospitality and Customer-Service Management, I hope to interact closely with clients and a team to create useful applications.  I am passionate about helping clients bring their vision to life.  <br/><br/>I look forward to connecting! </h4>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;