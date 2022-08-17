import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #111;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${getMenuItem()}
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  text-decoration: none;

  list-style: none;
  cursor: pointer;

  color: #fff;

  transition: 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

function getMenuItemTemplate(i) {
  return `
        &:nth-child(${i}){
            text-shadow: 0 0px 3px #fff, 0 0 8px #fff, 0 0 20px #03e3fc, 0 0 30px #03e3fc,
                0 0 40px #03e3fc, 0 0 60px #03e3fc, 0 0 80px #03e3fc;
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
