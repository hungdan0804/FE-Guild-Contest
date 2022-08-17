import {
  CopyRight,
  FooterBody,
  FooterContainer,
  IconWrapper,
  MenuItem,
  MenuLink,
  MenuNavigationContainer,
  SectionTitle,
  SocialMedia,
} from "./footer-elements";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaSkype,
} from "react-icons/fa";
import useVisibleComponent from "../../../hooks/useVisibleComponent";

function Footer() {
  const opacity = useVisibleComponent("footer");

  return (
    <FooterContainer opacity={opacity} id="footer">
      <SectionTitle>joinWithUs()</SectionTitle>
      <FooterBody>
        <SocialMedia>
          <IconWrapper>
            <FaFacebookSquare />
          </IconWrapper>
          <IconWrapper>
            <FaInstagramSquare />
          </IconWrapper>
          <IconWrapper>
            <FaGooglePlusSquare />
          </IconWrapper>
          <IconWrapper>
            <FaTwitterSquare />
          </IconWrapper>
          <IconWrapper>
            <FaSkype />
          </IconWrapper>
        </SocialMedia>
        <MenuNavigationContainer>
          <MenuItem>
            <MenuLink
              to="home"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              goHome()
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="about"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              discoverOurGuild()
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="lectures"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              findYourSkills()
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="members"
              smooth={true}
              duration={300}
              spy={true}
              exact={true}
              offset={-80}
            >
              getMembers()
            </MenuLink>
          </MenuItem>
        </MenuNavigationContainer>
      </FooterBody>
      <CopyRight>@2022 DanTang/KMS Technology</CopyRight>
    </FooterContainer>
  );
}

export default Footer;
