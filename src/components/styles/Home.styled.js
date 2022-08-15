import styled from "styled-components";
import { BookOpenIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";

export const IntroContainer = styled.div`
    padding: 0;
`

export const IntroHead = styled.header`
    padding: 70px 0 20px 60px;
    color: #D5D5D5;
    font-size: 8vw;
    font-family: 'Proxima Nova';
`

export const Name = styled.span`
    color: #ff2975;
    font-family: 'Proxima Nova';
    font-weight: bold;
`

export const IntroBody = styled.p`
    margin-left: 60px;
    padding: 0 90px 0 30px;
    color: #D5D5D5;
    font-size: calc(14px + 1vw);
    font-family: Helvetica;
    border-width: 0.75vw;
    border-style: solid;
    border-image: linear-gradient(to bottom, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff) 0 0 0 100%;
`

export const ResumeContainer = styled.div`
    margin: 40px 15vw 0 15vw;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #ffd319, #ff901f, #ff2975, #f222ff, #8c1eff) 1;
`

export const ResumeLink = styled.a`
    padding: 5px;
    color: #D5D5D5;
    text-decoration: none;
    font-size: calc(12px + 1.25vw);
    font-family: 'Proxima Nova';
    border: 3px solid #D5D5D5;
    border-radius: 5px;
    :hover {
        border-color: #ff901f;
        color: #ff2975;
    }
`

export const MailLink = styled.a`
    color: #ff2975;
    text-decoration: none;
    :hover {
        color: #bf2975;
        text-decoration: underline;
    }
`

export const PointContainer = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: center;
    }
`

export const IntroPoint = styled.div`
    align-items: center;
    text-align: center;
    width: 25vw;
    height: 35vw;
    :first-child {
        margin-left: 7.8125vw;
    }
    :nth-child(2) {
        margin: 0 4.6875vw;
    }
    :last-child {
        margin-right: 7.8125vw;
    }
    @media (max-width: 650px) {
        :first-child {
            margin: 4.6875vw auto;
        }
        :nth-child(2) {
            margin: 4.6875vw auto;
        }
        :last-child {
            margin: 4.6875vw auto;
        }
        width: 70vw;
        height: max-content;
    }
`

export const PointBook = styled(BookOpenIcon)`
    height: 12vw;
    width: 12vw;
    color: #8c1eff;
`

export const PointPencil = styled(PencilIcon)`
    height: 12vw;
    width: 12vw;
    color: #ff2975;
`

export const PointCode = styled(CodeIcon)`
    height: 12vw;
    width: 12vw;
    color: #ffd319;
`

export const PointHead = styled.h2`
    color: #D5D5D5;
    font-size: calc(24px + 1.5vw);
    font-family: 'Proxima Nova';
`

export const PointBody = styled.p`
    color: #D5D5D5;
    font-size: calc(12px + 1.25vw);
    font-family: Helvetica;
`