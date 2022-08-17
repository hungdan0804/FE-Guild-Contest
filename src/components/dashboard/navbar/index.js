import {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  NavbarContainer,
} from "./navbar-elements";
import { FaBars } from "react-icons/fa";

function NavBar(props) {
  const { toggle, opacity } = props;

  return (
    <Nav opacity={opacity}>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="home"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              goHome()
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              discoverOurGuild()
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="lectures"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              findYourSkills()
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="members"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              getMembers()
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="footer"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              joinWithUs()
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
