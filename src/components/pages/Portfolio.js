import React, {useState} from "react";
import Project from "./Project";


function Portfolio() {
const [projects] = useState([
    {
        name: "Gloomhaven Helper",
        app: "helper.com",
        repo: "github.com",
        description: "handlebars"
    },
    {
        name: "Work Day Scheduler",
        app: "schedule.com",
        repo: "github.com",

    },
    {
        name: "Weather Dashboard",
        app: "dashboard.com",
        repo: "github.com",
        image: "placeholder image"
    },
    {
        name: "Team Profile Generator",
        app: "generator.com",
        repo: "github.com",
        image: "placeholder image"
    },
    {
        name: "Note-Taker",
        app: "note.com",
        repo: "github.com",
        image: "placeholder image"
    },
    {
        name: "Code Quiz",
        app: "spooky.com",
        repo: "github.com",
        image: "placeholder image"
    }
])
    
    return (
        <div className="grid text-center">
            <div className="g-col-4">
                {projects.map((p,i)=>(
                    <Project 
                    project={p}
                    key={'project'+i}/>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;