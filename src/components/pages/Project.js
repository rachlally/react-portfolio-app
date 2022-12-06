
import React from "react";
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';

import '../../styles/Project.css';



function Project({ project }) {
    const { name, deployedApp, gitHubLink, description } = project
    return (
        <div className='container'>
            <Card style={{ width: '40%' }} className="project" key={name}>
                <Card.Body>
                    <div className="imgBorder">
                        <Card.Img src={require(`../../assets/projects/${name}.png`)} alt={name} />
                    </div>
                    <Card.Title>{name}</Card.Title>
                    <div className="link">
                        <a target="_blank" rel="noreferrer" href={deployedApp}><img src={require(`../../assets/visit.png`)} alt={`GitHub`} height="40" /></a>
                        <br />
                        <a target="_blank" rel="noreferrer" href={gitHubLink}><img src={require(`../../assets/GitHub.png`)} alt={`GitHub`} height="40" /></a>
                    </div>
                    <div className='description'>
                        <p>Technologies Used | {description}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>



    );
}

export default Project;

