import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContain = styled.nav`
    width: 100%;
    height: ${(props) => (props.navExtend ? "max-content" : "80px")};
    background: rgba(24, 24, 24, 0.5);
    display: flex;
    flex-direction: column;

    @media (min-width: 970px) {
        height: 80px;
        position: sticky;
        top: 0;
    }
`

export const LeftContain = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    background: rgba(24, 24, 24, 0.5);

    @media (max-width: 970px) {
        flex: 90%;
    }
    @media (max-width: 480px) {
        flex: 80%;
        padding-left: 10px;
    }
`

export const RightContain = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
    padding-left: 20%;
    background: rgba(24, 24, 24, 0.5);

    @media (max-width: 970px) {
        flex: 10%;
        padding-left: 0;
    }
    @media (max-width: 480px) {
        flex: 20%;
        padding-left: 0;
    }
`

export const InnerContain = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const LinkContain = styled.div`
    display: flex;
`

export const HomeLink = styled(Link)`
    color: #D5D5D5;
    font-size: x-large;
    font-family: 'Proxima Nova';
    text-decoration: none;
    white-space: nowrap;
    margin: 10px;
    background: linear-gradient(to left, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff);
    background-size: 0 0.1em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 600ms;
    :hover, :focus {
        color: #FFFFFF;
        background-size: 100% 0.1em;
    }
`

export const HubLink = styled.img`
    filter: grayscale(100%) brightness(70%);
    height: 24px;
    width: 24px;
    margin: 10px 5px;
`

export const LiLink = styled.img`
    filter: grayscale(100%) invert(100%) brightness(120%);
    height: 24px;
    width: 28.22px;
    margin: 10px 5px;
`

export const NavLink = styled(Link)`
    color: #D5D5D5;
    font-size: x-large;
    font-family: 'Proxima Nova';
    text-decoration: none;
    white-space: nowrap;
    margin: 10px 20px;
    background: linear-gradient(to left, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff);
    background-size: 0 0.1em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 600ms;
    :hover, :focus {
        color: #FFFFFF;
        background-size: 100% 0.1em;
    }

    @media (max-width: 970px) {
        display: none;
    }
`

export const NavLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    white-space: nowrap;
    margin: 10px;
    background: linear-gradient(to left, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff);
    background-size: 0 0.1em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 600ms;
    :hover, :focus {
        color: #FFFFFF;
        background-size: 100% 0.1em;
    }
`

export const LinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 970px) {
        display: none;
    }
`;

export const ExtendContain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 970px) {
        display: none;
    }
`