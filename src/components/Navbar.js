import React, { useState } from "react";
import { NavbarContain, LeftContain, RightContain, 
  InnerContain, LinkContain, HomeLink, NavLink, NavLinkExtended, ExtendContain, LinksButton, LiLink, HubLink} from "./styles/Navbar.styled";
import Ghub from "../images/Ghub.png";
import Lin from "../images/Lin.png";

export default function Navbar() {
  const [navExtend, setNavExtend] = useState(false);

  return (
    <NavbarContain navExtend={navExtend}>
      <InnerContain>
        <LeftContain>
          <LinkContain>
            <HomeLink to="/">Dustin Savage</HomeLink>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dnsavage/"><LiLink src={Lin}></LiLink></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dnsavage"><HubLink src={Ghub}></HubLink></a>
          </LinkContain>
        </LeftContain>
        <RightContain>
          <LinkContain>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Past Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <LinksButton 
            onClick={() => {
              setNavExtend((curr) => !curr);
              }}
              >
                {navExtend ? <>&#10005;</> : <>&#8801;</>}
                </LinksButton>
            </LinkContain>
        </RightContain>
      </InnerContain>
      {navExtend && (
        <ExtendContain>
          <NavLinkExtended onClick={() => {
              setNavExtend((curr) => !curr);
              }}
              to="/about">About</NavLinkExtended>
          <NavLinkExtended onClick={() => {
              setNavExtend((curr) => !curr);
              }}
              to="/skills">Skills</NavLinkExtended>
          <NavLinkExtended onClick={() => {
              setNavExtend((curr) => !curr);
              }}
              to="/projects">Past Work</NavLinkExtended>
          <NavLinkExtended onClick={() => {
              setNavExtend((curr) => !curr);
              }}
              to="/contact">Contact</NavLinkExtended>
        </ExtendContain>
      )}
    </NavbarContain>
  );
}