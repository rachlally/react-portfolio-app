import React from "react";

function Resume() {
    return (
    <div>
        <p>Resume</p>
        <a rel="noreferrer" href={require(`../../assets/Rachel_Lally.pdf`)} target="_blank" download>Download</a>

    </div>
    );
  }
  
  export default Resume;