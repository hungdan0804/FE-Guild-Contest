import styled from "styled-components";

export const AboutUsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 900px;

  opacity: ${({ opacity }) => opacity};

  @media screen and (min-width: 1024px) {
    height: min(100vh, 900px);
  }
`;

export const SectionTitle = styled.h3`
  color: #fff;

  text-decoration: none;
  font-size: 1rem;

  padding: 20px 5px;

  border: 0.2rem #111 solid;
  border-radius: 10px;

  color: yellow;
  text-shadow: 0 0 5px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange,
    0 0 50px orange;

  animation: visible 1.5s ease-in-out forwards;

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 90%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;

    perspective: 900px;

    width: 90%;
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 25%;

  z-index: 3;

  display: flex;
  flex-direction: column;
  position: relative;

  align-items: center;
  justify-content: center;

  background-color: orange;
  color: #fff;

  border: 0.2rem #ba370b solid;
  border-radius: 40px;

  box-shadow: 0 0 5px #ba370b, 0 0 20px #ba370b, 0 0 30px #ba370b;

  &::after {
    content: "";
    position: absolute;

    z-index: -1;

    width: 95%;
    height: 95%;

    background-color: #111;

    border: 0.2rem yellow solid;
    border-radius: 40px;
    box-shadow: 0 0 5px yellow, 0 0 10px yellow, 0 0 15px yellow;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 400px;

    transition: 0.5s all ease;
    transform: rotateX(50deg) scale(0.7);
    perspective: 900px;

    &:hover {
      cursor: pointer;
      transform: rotate(0deg) scale(1) translateY(10px);

      transition: 0.5s all ease;
    }

    &::after {
      content: "";
      position: absolute;

      z-index: -1;

      width: 95%;
      height: 95%;

      background-color: #111;

      border: 0.2rem yellow solid;
      border-radius: 40px;
      box-shadow: 0 0 5px yellow, 0 0 10px yellow, 0 0 15px yellow;
    }
  }
`;

export const NumberMessage = styled.h1`
  position: relative;
  font-size: 1.4rem;

  color: yellow;
  text-shadow: 0 0 5px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange,
    0 0 50px orange;

  &::after {
    content: "";

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: #111;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Description = styled.h5`
  position: relative;
  font-size: 0.9rem;

  width: 80%;

  color: yellow;
  text-shadow: 0 0 5px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange,
    0 0 50px orange;

  word-wrap: break-word;

  text-align: center;
  &::after {
    content: "";

    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: #111;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
