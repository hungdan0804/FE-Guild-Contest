import styled from "styled-components";
import { FaChartPie } from "react-icons/fa";

export const LecturesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 900px;

  opacity: ${({ opacity }) => opacity};
`;

export const SectionTitle = styled.h3`
  height: 15%;
  color: #fff;

  text-decoration: none;
  font-size: 1rem;

  padding: 20px 5px;

  color: #ff5f6d;
  text-shadow: 0 0 5px #ff5f6d, 0 0 20px #ff5f6d, 0 0 30px #e96443,
    0 0 40px #e96443, 0 0 50px #e96443;

  animation: visible 1.5s ease-in-out forwards;

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1024px) {
    height: 30%;

    font-size: 1.3rem;
  }

  @media screen and (min-width: 768px) {
    height: 25%;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100px);
  grid-gap: 60px 0px;

  text-align: center;

  width: 80%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 170px);
    grid-gap: 60px 90px;

    width: 90%;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 170px);
    grid-gap: 60px 50px;

    width: 90%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  background-image: linear-gradient(#ff5f6d, #e96443);
  box-shadow: 0 0 5px #ff5f6d, 0 0 20px #ff5f6d, 0 0 30px #e96443,
    0 0 40px #e96443;

  cursor: pointer;
`;

export const CardHeader = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardIconWrapper = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 0 3px #fff;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

export const CardIcon = styled(FaChartPie)`
  font-size: 1.5rem;
  color: white;
`;

export const CardBody = styled.div`
  width: 75%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LanguageTitle = styled.h2`
  font-size: 0.7em;

  color: #fff;

  text-align: left;

  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`;

export const Description = styled.p`
  font-size: 0.5em;
  line-height: 1.5em;

  color: #fff;

  text-align: left;

  margin: 0;

  @media screen and (min-width: 1024px) {
    font-size: 0.6em;
  }
`;
