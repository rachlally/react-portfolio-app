import React from "react";
import '../../styles/Resume.css';
import Button from 'react-bootstrap/Button';

function Resume() {
    return (

        <div className="resumeContainer">
            <h3 className="skillText">Skills Include</h3>
            <div className='skills'>
                <div>
                    <img src={require(`../../assets/HTML.png`)} alt={(`html logo`)} height="70" />
                    <img src={require(`../../assets/CSS.png`)} alt={(`css logo`)} height="70" />
                    <img src={require(`../../assets/javascript.png`)} alt={(`javascript logo`)} height="70" />
                    <img src={require(`../../assets/create react.png`)} alt={(`react logo`)} height="70" />
                    <img src={require(`../../assets/tailwind.png`)} alt={(`tailwind logo`)} height="70" />
                </div>
                <br />
                <div>
                    <img src={require(`../../assets/NodeJS.png`)} alt={(`nodejs logo`)} height="70" />
                    <img src={require(`../../assets/mysql.png`)} alt={(`mysql logo`)} height="70" />
                    <img src={require(`../../assets/mongo.png`)} alt={(`mongo logo`)} height="70" />
                </div>
            </div>    
                <div className="resume">
                    <Button variant="light" rel="noreferrer" href={require(`../../assets/Rachel Lally Resume (1).pdf`)} target="_blank" download>Download Resume</Button>
                </div>
        </div>
    );
}

export default Resume;