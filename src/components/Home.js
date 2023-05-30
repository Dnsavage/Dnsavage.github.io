import React from "react";
import {
  IntroContainer,
  IntroHead,
  Name,
  IntroBody,
  ResumeContainer,
  ResumeLink,
  MailLink,
  PointContainer,
  IntroPoint,
  PointHead,
  PointBody,
  PointBook,
  PointPencil,
  PointCode,
} from "./styles/Home.styled";

export default function Home() {
  return (
    <section id="home">
      <IntroContainer>
        <IntroHead>
          Hi, <Name>I'm Dustin</Name>
        </IntroHead>
        <IntroBody>
          I'm a full-stack web developer from West Blocton, Alabama. I work as a
          Programmer Analyst for the Jefferson County Department of Health in
          Birmingham, Alabama. When I'm not working, I can either be found
          playing video games or out exploring nature.
        </IntroBody>
      </IntroContainer>
      <ResumeContainer>
        <PointBody>
          While you're here, why not grab a copy of my resume?
        </PointBody>
        <ResumeLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://1drv.ms/b/s!AgBXgFNS-erugQDnwhVSYTfDkQtp?e=kcHtjO"
        >
          View Resume
        </ResumeLink>
        <PointBody>
          You can reach me at{" "}
          <MailLink href="mailto:dnsavage1@outlook.com">
            Dnsavage1@outlook.com
          </MailLink>
        </PointBody>
      </ResumeContainer>
      <PointContainer>
        <IntroPoint>
          <PointBook />
          <PointHead>Knowledge</PointHead>
          <PointBody>
            This is something I yearn for. I have a tendency to hyperfixate on
            topics for a while, leading me to learn great amounts in short
            periods of time.
          </PointBody>
        </IntroPoint>
        <IntroPoint>
          <PointPencil />
          <PointHead>Design</PointHead>
          <PointBody>
            I'm not above spending hours at a time designing my software.
            Planning an intuitive UX is almost as cool as building it.
          </PointBody>
        </IntroPoint>
        <IntroPoint>
          <PointCode />
          <PointHead>Development</PointHead>
          <PointBody>
            The reason I spend the majority of my time at my monitor. There's
            just something fascinating about building something complicated from
            the ground up and seeing it work.
          </PointBody>
        </IntroPoint>
      </PointContainer>
    </section>
  );
}
