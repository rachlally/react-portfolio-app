import React from "react";
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import '../../styles/Project.css';



function Project({ project }) {
    const { name, deployedApp, gitHubLink, description } = project
    return (
        <Container>
            <Card className="project col-4 d-flex flex-row" key={name}>
                <Card.Img src={require(`../../assets/projects/${name}.png`)} alt={name} height="280" />
                <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <a href={deployedApp}>{name}</a>
                        <br />
                        <a href={gitHubLink}>GitHub</a>
                    </Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Container>



    );
}

export default Project;

