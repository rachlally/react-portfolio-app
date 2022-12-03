import React, { useState } from "react";
import Project from "./Project";


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
            deployedApp: "schedule.com",
            gitHubLink: "github.com",
            description: "JavaScript, Bootstrap"
        },
        {
            name: "Weather Dashboard",
            deployedApp: "dashboard.com",
            gitHubLink: "github.com",
            description: "JavaScript, Bootstrap"
        },
        {
            name: "Team Profile Generator",
            deployedApp: "generator.com",
            gitHubLink: "github.com",
            description: "CSS, JavaScript"
        },
        {
            name: "Note Taker",
            deployedApp: "note.com",
            gitHubLink: "github.com",
            description: "CSS, JavaScript"
        },
        {
            name: "Code Quiz",
            deployedApp: "spooky.com",
            gitHubLink: "github.com",
            description: "CSS, JavaScript, Local Storage"
        }
    ])


    return (
        <div >
            {projects.map((p, i) => (                
                <Project
                    project={p}
                    key={'project' + i} />
            ))}
        </div>
    );
}

export default Portfolio;