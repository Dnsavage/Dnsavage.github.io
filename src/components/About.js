import React from "react";
import { Link, Route, Routes, Router } from "react-router-dom";
import { AboutPageContent, AboutContainer, AboutHead, AboutBody, AboutMail } from "./styles/About.styled";

export default function About() {
    return (
        <section id="about">
          <AboutPageContent>
            <AboutContainer>
              <AboutHead>About Me</AboutHead>
              <AboutBody>
                I'm a full-stack developer located in West Blocton, Alabama. I've always loved figuring 
                out how things work. This has led me to a passion for crafting intuitive user experiences, 
                APIs, and databases.<br/><br/>
                I initially went to school for Computer Science. Soon after, I turned to MIS in search of 
                the soft skills that CS couldn't give me. I then decided to adopt a minor in Psychology, as 
                I had discovered my pursuit of the inner workings of things was not limited to technology.<br/><br/>
                I enjoy video games, hiking, reading, and music of a broad spectrum of genres. There's also a special 
                place in my heart for astronomy and all things automotive.<br/><br/>
                I'm interested in working on projects of any size and complexity with friendly people.<br/><br/>
                <AboutMail href="mailto:dnsavage1@outlook.com">Reach out to me.</AboutMail>
              </AboutBody>
            </AboutContainer>
          </AboutPageContent>
        </section>
      );
}