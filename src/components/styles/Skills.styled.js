import styled from "styled-components";

export const SkillsDescrContainer = styled.div`
  margin-bottom: 5vw;
`;

export const SkillsHead = styled.header`
  padding: 40px 40px 20px 20px;
  color: #ff2975;
  font-size: 8vw;
  font-family: "Proxima Nova";
  font-weight: bold;
`;

export const SkillsBody = styled.p`
  padding: 0 60px 0 60px;
  color: #d5d5d5;
  font-size: calc(12px + 1.25vw);
  font-family: Helvetica;

  @media (min-width: 1080px) {
    padding: 0 20vw 0 60px;
  }
`;

export const SkillsSubContain = styled.div`
  margin: 0 25vw 3vw;
  text-align: center;
`;

export const SkillsSubHead = styled.h3`
  color: #ff2975;
  font-size: calc(24px + 1.25vw);
  font-family: "Proxima Nova";
  font-weight: normal;
  border-bottom: 3px solid;
  border-image: linear-gradient(
      to left,
      #181818,
      #808080,
      #d5d5d5,
      #808080,
      #181818
    )
    0 0 100% 0;
  width: 50vw;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 22vw);
  grid-gap: 3vw;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 33vw);
    grid-gap: 4.5vw;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 44vw);
    grid-gap: 6vw;
  }
`;

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 6px solid;
  border-image: linear-gradient(
      to left,
      #ffd319,
      #ff901f,
      #ff2975,
      #f222ff,
      #8c1eff
    )
    100% 0 0 0;
  background: linear-gradient(#d5d5d5, #d5d5d5) right/3px 100%,
    linear-gradient(#d5d5d5, #d5d5d5) left/3px 100%,
    linear-gradient(#d5d5d5, #d5d5d5) bottom/100% 3px;
  background-repeat: no-repeat;
`;

export const SkillTitle = styled.h3`
  color: #f9f9f9;
  font-size: calc(28px + 1.25vw);
  font-family: "Proxima Nova";
  margin: auto;
`;

export const SkillBG = styled.img`
  position: absolute;
  height: 21.5vw; //86vw divided into 4 rows
  width: 21.5vw; //Same as height to maintain a square and consistent aspect ratio
  opacity: 0.15;

  @media (max-width: 900px) {
    height: 28.666667vw; //86vw divided into 3 rows
    width: 28.666667vw;
  }

  @media (max-width: 650px) {
    height: 43vw; //86vw divided into 2 rows
    width: 43vw;
  }
`;
