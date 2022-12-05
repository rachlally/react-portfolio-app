import React, { useState } from "react";
import Project from "./Project";
// import Container from "react-bootstrap/Container";
// import Card from 'react-bootstrap/Card';
import '../../styles/Project.css';


function Portfolio() {
    const [projects] = useState([
        {
            name: "Gloomhaven Helper",
            deployedApp: "https://gloomhaven-helper-deluxe.herokuapp.com/",
            gitHubLink: "https://github.com/Mattdack/gloomhaven-helper",
            description: "MySql, Handlebars, Node.JS"
        },
        {
            name: "Work Day Scheduler",
            deployedApp: "https://rachlally.github.io/work-day-scheduler/",
            gitHubLink: "https://github.com/rachlally/work-day-scheduler",
            description: "JavaScript, Bootstrap"
        },
        {
            name: "Weather Dashboard",
            deployedApp: "https://rachlally.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/rachlally/weather-dashboard",
            description: "JavaScript, Bootstrap"
        },
        {
            name: "Team Profile Generator",
            deployedApp: "https://github.com/rachlally/team-profile-generator",
            gitHubLink: "https://github.com/rachlally/team-profile-generator",
            description: "CSS, JavaScript"
        },
        {
            name: "Note Taker",
            deployedApp: "https://note-taker-lally.herokuapp.com/",
            gitHubLink: "https://github.com/rachlally/note-taker",
            description: "CSS, JavaScript"
        },
        {
            name: "Code Quiz",
            deployedApp: "https://rachlally.github.io/code-quiz/",
            gitHubLink: "https://github.com/rachlally/code-quiz",
            description: "CSS, JavaScript, Local Storage"
        }
    ])


    return (
        <div className="portfolio">
            {projects.map((p, i) => (

                <Project
                    project={p}
                    key={'project' + i} />
            ))}
        </div>
    );
}

export default Portfolio;