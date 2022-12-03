import React from "react";


function Project({project}) {
    const {name, deployedApp, gitHubLink, description} = project
    return (
    <div className="project" key={name}>
        <img src={require(`../../assets/projects/Gloomhaven Helper.png`)} alt={name}/>
        <div className="projectText">
            <h3>
                <a href={deployedApp}>{name}</a>
                <br/>
                <a href={gitHubLink}>GitHub</a>
            </h3>
            <p>{description}</p>
        </div>
    </div>
    );
  }

  export default Project;

