import React from "react";

function Navigation({currentPage, handlePageChange}) {
    return (

        <ul>
          <li>
            <a href="#aboutme" onClick={()=> handlePageChange("AboutMe")}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
          </li>
          <li>
            <a href="#portfolio" onClick={()=> handlePageChange("Portfolio")}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          </li>
          <li>
            <a href="#contact" onClick={()=> handlePageChange("Contact")}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={()=> handlePageChange("Resume")}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          </li>
        </ul>


    );
  }
  
  export default Navigation;