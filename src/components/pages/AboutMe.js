import React from "react";

function AboutMe() {
    return (
    <div className='container'>
        <h1>About Me</h1>
        <img src={require(`../../assets/Rachel Lally.png`)} alt={`Rachel with her dog`} />
        {/* <div className='container'> */}
            <p>My name is Rachel Lally. I am a full-stack web developer based out of White Salmon, Washington.  Prior to entering the world of coding, I was a hospitality professional. I managed a private community in the mountains of Big Sky, Montana. Following my move to WA 3+ years ago, I managed a boutique winery in the Hood River Valley of Oregon.  This portfolio is a work in progress. I am excited to continue to add and improve. Thanks for checking it out!</p>
    </div>
    );
  }
  
  export default AboutMe;