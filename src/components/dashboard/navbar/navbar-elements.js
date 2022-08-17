import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background-color: inherit;

  opacity: ${({ opacity }) => opacity};

  transition: 0.8s all ease;

  height: 80px;
  margin-top: -80px;
  top: 0;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: sticky;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  width: min(90%, 900px);
  z-index: 1;

  > * {
    flex-basis: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: inline-block;

  padding: 0 10px;

  line-height: 80px;

  ${getMenuItem()}
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;

  text-decoration: none;
  font-size: 0.65em;

  padding: 10px 5px;

  border: 0.2rem #111 solid;
  border-radius: 10px;

  cursor: pointer;

  transition: 0.3s all ease;

  animation: visible 1.5s ease-in-out forwards;

  @media screen and (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;

function getMenuItemTemplate(i) {
  return `
        &:nth-child(${i}){
            text-shadow: 0 0px 3px #fff, 0 0 8px #fff, 0 0 20px #03e3fc, 0 0 30px #03e3fc,
                0 0 40px #03e3fc, 0 0 60px #03e3fc, 0 0 80px #03e3fc;
        }
        &:nth-child(${i}):hover a{
            color: #111;
            background-color: #03e3fc;
            border: 0.2rem #03e3fc solid;

            box-shadow: 0 0px 3px #fff, 0 0 20px #03e3fc, 0 0 30px #03e3fc;
        }
    `;
}

function getMenuItem() {
  const MenuLength = 5;
  let str = "";
  for (let i = 1; i <= MenuLength; i += 1) {
    str += getMenuItemTemplate(i);
  }
  return str;
}
