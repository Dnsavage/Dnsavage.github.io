import { projects } from "../data";
import { ProjDescrContainer, ProjHead, ProjBody, ProjectContain, Project, 
  SlideShow, ProjTitle, SiteLink, ImgGrid, ImgContainer, Img, Video,  
  ProjDescr, ListHead, ProjList, BottomContain, ProjToolsContain, ProjFeatsContain } from "./styles/Projects.styled";

export default function Projects() {
    return (
        <section id="projects">
          <ProjDescrContainer>
            <ProjHead>
              My Work
            </ProjHead>
            <ProjBody>
              These are some of the projects I've either created on my lonesome or 
              contributed to in a meaningful way. Feel free to take a look around.
            </ProjBody>
          </ProjDescrContainer>
          <ProjectContain>
            {projects.map((project) => (
              <Project key={project.title}>
                {project.link ? 
                <>
                <SiteLink target="_blank" rel="noopener noreferrer" href={project.link}>Visit</SiteLink>
                </> : <></>
                }
                <ProjTitle>{project.title}</ProjTitle>
                <SlideShow>
                  <ImgGrid>
                    {project.images.map((img) => (
                        <ImgContainer>
                          {img.gif ?
                            <>
                              <Video key={img.path} alt={img.alt} src={img.gif} controls={true}/>
                            </> : 
                            <>
                              <Img key={img.path} alt={img.alt} src={img.path} />
                            </>
                          }
                        </ImgContainer>
                    ))}
                  </ImgGrid>
                </SlideShow>
                <ProjDescr>{project.description}</ProjDescr>
                <BottomContain>
                  <ProjToolsContain>
                    <ListHead>Tools Used:</ListHead>
                    <ul>
                      {project.tools.map(tool => <ProjList>{tool}</ProjList>)}
                    </ul>
                  </ProjToolsContain>
                  <ProjFeatsContain>
                    <ListHead>Key Features:</ListHead>
                    <ul>
                      {project.features.map(feature => <ProjList>{feature}</ProjList>)}
                    </ul>
                  </ProjFeatsContain>
                </BottomContain>
              </Project>
            ))}
          </ProjectContain>
        </section>
      );
}
//{navExtend ? <>&#10005;</> : <>&#8801;</>}