import React from "react";
import { StyledLinks } from './Styling/Styling';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Socials() {
  return (
    <StyledLinks>
    <div class="links-container">
        <a href="https://github.com/Collyngodlewski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/collyngodlewski/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>
    </div>
    </StyledLinks>
  );
}