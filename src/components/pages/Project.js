import React from "react";
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';

import '../../styles/Project.css';



function Project({ project }) {
    const { name, deployedApp, gitHubLink, description } = project
    return (
        <div className='container'>
            <Card style={{ width: '30rem'} }   className="project " key={name}>
                <Card.Img src={require(`../../assets/projects/${name}.png`)} alt={name} height="280" />
                {/* <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text> */}
                        <a href={deployedApp}>{name}</a>
                        <br />
                        <a href={gitHubLink}>GitHub</a>
                    {/* </Card.Text> */}
                    <p>{description}</p>
                {/* </Card.ImgOverlay> */}
            </Card>
        </div>



    );
}

export default Project;

