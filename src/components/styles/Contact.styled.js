import styled from "styled-components";

export const ContactContainer = styled.div`
    margin: 5vw 40px 0 60px;
`

export const ContactHead = styled.header`
    padding: 40px 0 20px 60px;
    color: #ff2975;
    font-size: 8vw;
    font-family: 'Proxima Nova';
    font-weight: bold;
`

export const ContactBody = styled.p`
    padding: 0 20px 0 60px;
    color: #D5D5D5;
    font-size: calc(12px + 1.25vw);
    font-family: Helvetica;
`

export const ContactLink = styled.a`
    color: #ff2975;
    text-decoration: none;
    :hover {
        color: #bf2975;
        text-decoration: underline;
    }
`