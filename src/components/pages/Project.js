import React from "react";



function Project({project}) {
    const {name, app, repo, description} = project
    return (
    <div className="project" key={name}>
        {/* <img src={require(`../../assets/projects/${name}.png`)} alt={name}/> */}
        <div className="projectText">
            <h3>
                <a href={app}>Deployed App</a>
                <a href={repo}>Repo</a>
            </h3>
            <p>{description}</p>
        </div>
    </div>
    );
  }

  export default Project;

//HEADER EDITS
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

//ABOUT ME EDITS
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

//PORTFOLIO EDITS
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

//CONTACT EDITS
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

//RESUME
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)