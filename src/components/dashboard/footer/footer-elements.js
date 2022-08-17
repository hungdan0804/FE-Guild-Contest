import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: min(100vh, 350px);

  opacity: ${({ opacity }) => opacity};
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SectionTitle = styled.h3`
  color: #fff;

  text-decoration: none;
  font-size: 1rem;

  padding: 20px 5px;

  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 50px #fff;

  animation: visible 1.5s ease-in-out forwards;

  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const IconWrapper = styled.div`
  margin-inline: 10px;

  color: #fff;

  font-size: 2rem;

  cursor: pointer;

  > svg {
    filter: drop-shadow(0px 0px 5px #fff) drop-shadow(0px 0px 20px #fff);
  }
`;

export const MenuNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  text-align: center;
`;

export const MenuItem = styled.div`
  display: inline-block;
  width: 250px;

  line-height: 40px;

  @media screen and (min-width: 1024px) {
    line-height: 80px;
  }
`;

export const MenuLink = styled(LinkScroll)`
  color: #fff;

  text-decoration: none;
  font-size: 0.7em;

  padding: 5px 5px;

  cursor: pointer;

  transition: 0.3s all ease;

  animation: visible 1.5s ease-in-out forwards;

  text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 50px #fff;

  &:hover {
    color: #fff;
  }
`;

export const CopyRight = styled.div`
  color: #fff;
  animation: visible 1.5s ease-in-out forwards;

  text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 50px #fff;

  font-size: 0.65em;
`;
