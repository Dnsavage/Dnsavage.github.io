import styled from "styled-components";

export const ProjDescrContainer = styled.div`
    margin-bottom: 5vw;
`

export const ProjHead = styled.header`
    padding: 40px 40px 20px 20px;
    color: #ff2975;
    font-size: 8vw;
    font-family: 'Proxima Nova';
    font-weight: bold;
`

export const ProjBody = styled.p`
    padding: 0 60px 0 60px;
    color: #D5D5D5;
    font-size: calc(12px + 1.25vw);
    font-family: Helvetica;

    @media (min-width: 1080px) {
        padding: 0 20vw 0 60px;
    }
`

export const ProjectContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
`

export const Project = styled.div`
    margin: 0 10vw 10vw;
    padding: 1vw;
    border-top: 6px solid;
    border-image: linear-gradient(to left, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff) 100% 0 0 0;
    background: 
    linear-gradient(#d5d5d5, #d5d5d5) right/3px 100%,
    linear-gradient(#d5d5d5, #d5d5d5) left/3px 100%,
    linear-gradient(#d5d5d5, #d5d5d5) bottom/100% 3px;
    background-repeat: no-repeat;
`

export const ProjTitle = styled.p`
    color: #ff2975;
    font-size: 8vw;
    font-family: 'Proxima Nova';
    margin: 1vw 0;
`

export const SiteLink = styled.a`
    float: right;
    padding: 0.75vw;
    margin: 1.75vw 2vw 0 0;
    color: #D5D5D5;
    text-decoration: none;
    font-size: 4vw;
    font-family: 'Proxima Nova';
    border: 0.25vw solid #D5D5D5;
    border-radius: 1vw;
    cursor: pointer;
    :hover {
        border-color: #ff901f;
        color: #ff2975;
    }
`

export const SlideShow = styled.div`
    border: 3px solid #d5d5d5;
    margin-top: 1vw;
`

export const ImgGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
    background-color: #d5d5d5;
`

/*export const ImgMod = ({isGif}) => (
    <Img key={this.path} alt={this.alt} src={this.path} />
);*/

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export const ProjDescr = styled.p`
    color: #D5D5D5;
    font-size: calc(12px + 1.25vw);
    font-family: Helvetica;
`

export const BottomContain = styled.div`
    bottom: 0;
`

export const ListHead = styled.p`
    color: #ff2975;
    font-size: calc(12px + 1.25vw);
    font-family: 'Proxima Nova';
`

export const ProjList = styled.li`
    color: #D5D5D5;
    font-size: calc(12px + 1.25vw);
    font-family: Helvetica;
`

export const ProjToolsContain = styled.div`
    float: right;
    margin-right: 2vw;
    
    @media (max-width: 1010px){
        float: none;
        margin: 0 1vw;
    }
`

export const ProjFeatsContain = styled.div`
    float: left;
    margin-left: 2vw;

    @media (max-width: 1010px){
        float: none;
        margin: 0 1vw;
    }
`