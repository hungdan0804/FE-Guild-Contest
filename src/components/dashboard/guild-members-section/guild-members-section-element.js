import styled from "styled-components";

export const GuildMembersSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: min(100vh, 900px);

  opacity: ${({ opacity }) => opacity};
`;

export const SectionTitle = styled.h3`
  color: #fff;
  height: 300px;

  text-decoration: none;
  font-size: 1rem;

  padding: 20px 5px;

  border: 0.2rem #111 solid;
  border-radius: 10px;

  color: #a8ff78;
  text-shadow: 0 0 5px #78ffd6, 0 0 20px #78ffd6, 0 0 30px #78ffd6,
    0 0 40px #78ffd6, 0 0 50px #78ffd6;

  animation: visible 1.5s ease-in-out forwards;

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  flex-grow: 1;

  position: relative;

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    width: 90%;
    height: 100%;
  }
`;

export const SliderTool = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  width: 90%;
  height: 400px;

  position: absolute;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    align-items: center;

    height: 300px;
  }
`;

export const SliderButton = styled.div`
  color: #a8ff78;

  padding: 5px 10px;
  font-size: 1em;

  border: 0.1rem #a8ff78 solid;
  border-radius: 90%;

  margin: 10px;

  &:hover {
    background: #a8ff78;
    border-color: #fff;
    color: #fff;

    box-shadow: 0 0 5px #78ffd6, 0 0 20px #78ffd6, 0 0 30px #78ffd6,
      0 0 40px #78ffd6, 0 0 50px #78ffd6;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px;
  }
`;

export const SliderList = styled.ul`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;

  padding: 0;

  > li:not(:first-child) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 300px);
    grid-gap: 0px 60px;

    width: 70%;

    > li:not(:last-child) {
      display: inline-block;
    }
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 300px);
    grid-gap: 0px 60px;

    width: 70%;

    > li:not(:first-child) {
      display: inline-block;
    }
  }
`;

export const SliderItem = styled.li`
  display: inline-block;
  list-style: none;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;

export const SliderCard = styled.div`
  background-color: #a8ff78;
  box-shadow: 0 0 5px #78ffd6, 0 0 20px #78ffd6, 0 0 30px #78ffd6;

  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 20px;
`;

export const SliderCardImage = styled.img`
  width: 130px;
  height: 130px;

  border-radius: 50%;
  object-fit: cover;
`;

export const SliderCardTitle = styled.div`
  margin-top: 30px;
  font-size: 1em;

  color: #fff;
`;

export const SliderCardDescription = styled.div`
  margin-top: 5px;

  font-size: 0.7em;
  color: #fff;
`;
