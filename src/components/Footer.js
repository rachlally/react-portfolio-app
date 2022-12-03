import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
    <footer className="footer">
        <a target="_blank" rel="noreferrer" href="https://github.com/rachlally"><img src={require(`../assets/GitHub.png`)} alt={`GitHub`} height="40"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rachellally/"><img src={require(`../assets/LinkedIn.png`)} alt={`LinkedIn`} height="40"/></a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/home"><img src={require(`../assets/Twitter.png`)} alt={`Twitter`} height="40"/></a>
    </footer>
    )
  }
  
  export default Footer;