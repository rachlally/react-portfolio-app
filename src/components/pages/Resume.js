import React from "react";
import '../../styles/Resume.css';
import Button from 'react-bootstrap/Button';

function Resume() {
    return (
    <div className="resumeContainer">
    <div className="resume">
        <Button variant="light" rel="noreferrer" href={require(`../../assets/Rachel_Lally.pdf`)} target="_blank" download>Download Resume</Button>

    </div>
    </div> 
    );
  }
  
  export default Resume;