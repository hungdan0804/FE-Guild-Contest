import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { CaretDownOutlined } from "@ant-design/icons";

export const WelcomeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: min(100vh, 1080px);
`;

export const WelcomeMessageContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  animation: visible 1.5s ease-in-out alternate;
`;

export const WelcomeMessage = styled.span`
  font-size: 1.3rem;

  color: #000;

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #03e3fc,
        0 0 80px #03e3fc, 0 0 90px #03e3fc, 0 0 100px #03e3fc, 0 0 150px #03e3fc;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }

  ${getTextShadow()}
`;

function getTextShadowTemplate(i) {
  return `
    &:nth-child(${i}){
      color: #fff;
      text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 42px #03e3fc,
        0 0 82px #03e3fc, 0 0 92px #03e3fc, 0 0 102px #03e3fc, 0 0 151px #03e3fc;
      animation: pulsate 2.5s infinite alternate;
    }
  `;
}

function getFlickerAnimationTemplate(i) {
  return `
    &:nth-child(${i}){
      color: #fff;
      animation: flicker ${i / 2 + 1}s infinite alternate;
    }
  `;
}

function getTextShadow() {
  const WelcomeMessage = "Welcome to";
  let str = "";
  for (let i = 0; i <= WelcomeMessage.length; i += 1) {
    if (i === 1 || i === 4 || i == 9) {
      str += getFlickerAnimationTemplate(i);
    } else {
      str += getTextShadowTemplate(i);
    }
  }
  return str;
}

export const GuildName = styled.h1`
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 42px #03e3fc,
    0 0 82px #03e3fc, 0 0 92px #03e3fc, 0 0 102px #03e3fc, 0 0 151px #03e3fc;

  color: #fff;
  font-size: 0.7rem;

  animation: pulsate 2.5s infinite alternate, visible 1.5s ease-in-out forwards;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const GettingStartedButton = styled(LinkScroll)`
  position: relative;

  text-align: center;
  text-decoration: none;
  font-size: 0.7rem;

  color: #fff;

  border: 0.2rem solid #fff;
  border-radius: 1em;
  padding: 1em;
  margin-top: 40px;

  cursor: pointer;

  animation: visible 1.5s ease-in-out alternate;
  background-color: inherit;

  transition: 0.5s all ease;

  &:hover {
    color: #111;
    background-color: #03e3fc;

    border: 0.2rem solid #fff;

    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #03e3fc,
      0 0 0.8rem #03e3fc, 0 0 2.8rem #03e3fc, inset 0 0 1.3rem #03e3fc;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const ExpandIcon = styled(CaretDownOutlined)`
  font-size: 3rem;

  color: #fff;

  animation: UpAndDown 1.5s infinite;

  @keyframes UpAndDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
  }
`;
