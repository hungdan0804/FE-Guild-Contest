import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
} from "./sidebar-elements";

function SideBar(props) {
  const { isOpen, toggle } = props;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink
              to="home"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
              isOpen={isOpen}
              onClick={toggle}
            >
              goHome()
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="about"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
              isOpen={isOpen}
              onClick={toggle}
            >
              discoverOurGuild()
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="lectures"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
              isOpen={isOpen}
              onClick={toggle}
            >
              findYourSkills()
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="members"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
              isOpen={isOpen}
              onClick={toggle}
            >
              getMembers()
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="footer"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
              isOpen={isOpen}
              onClick={toggle}
            >
              joinWithUs()
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
