import React, { useState } from "react";
import Project from "./Project";
// import Container from "react-bootstrap/Container";
// import Card from 'react-bootstrap/Card';
// import '../../styles/Project.css';



function Portfolio() {
    const [projects] = useState([
        {
            name: "WasteNot Kitchen Tracker",
            deployedApp: "https://wastenotkitchentracker.netlify.app/",
            gitHubLink: "https://github.com/rachlally/feast-front-end",
            description: "A kitchen application to track what's in your kitchen and reduce waste",
            technology: "React, MySql, Sequelize, Node.JS, Tailwind"
        },
        {
            name: "Gloomhaven Helper",
            deployedApp: "https://gloomhaven-helper-deluxe.herokuapp.com/",
            gitHubLink: "https://github.com/Mattdack/gloomhaven-helper",
            description: "An application to help declutter the Gloomhaven boardgame",
            technology: "MySql, Sequelize, Handlebars, Node.JS, Express, Tailwind"
        },
        {
            name: "Work Day Scheduler",
            deployedApp: "https://rachlally.github.io/work-day-scheduler/",
            gitHubLink: "https://github.com/rachlally/work-day-scheduler",
            description: "An application to help users stay organized for the day",
            technology: "Jquery, Bootstrap"
        },
        {
            name: "Weather Dashboard",
            deployedApp: "https://rachlally.github.io/weather-dashboard/",
            gitHubLink: "https://github.com/rachlally/weather-dashboard",
            description: "What's the weather in your city?  Your best friend's city?  Use this application to easily view the 5-day forecast for any city",
            technology: "HTML, JavaScript, Bootstrap"
        },
        {
            name: "Note Taker",
            deployedApp: "https://note-taker-lally.herokuapp.com/",
            gitHubLink: "https://github.com/rachlally/note-taker",
            description: "A note taker application to keep user a little more organized",
            technology: "HTML, CSS, JavaScript"
        },
        {
            name: "Code Quiz",
            deployedApp: "https://rachlally.github.io/code-quiz/",
            gitHubLink: "https://github.com/rachlally/code-quiz",
            description: "A little spooky, a little hard...take the quiz on all things Halloween",
            technology: "HTML, CSS, JavaScript, Local Storage"
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