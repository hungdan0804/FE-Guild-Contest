import { useEffect, useState } from "react";
import AboutUsSection from "../../../components/dashboard/about-us-section";
import Footer from "../../../components/dashboard/footer";
import GuildMemberSection from "../../../components/dashboard/guild-members-section";
import LecturesSection from "../../../components/dashboard/lectures-section";
import NavBar from "../../../components/dashboard/navbar";
import SideBar from "../../../components/dashboard/sidebar";
import WelcomeSection from "../../../components/dashboard/welcome-section";

function DashBoardPage() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollHeight]);

  const handleScroll = (e) => {
    const newScrollHeight = window.scrollY;

    setCurrentScrollHeight(window.scrollY);
    if (currentScrollHeight < newScrollHeight) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  };

  return (
    <>
      <SideBar isOpen={isOpenMenu} toggle={toggleMenu} />
      <NavBar toggle={toggleMenu} opacity={opacity} />
      <WelcomeSection />
      <AboutUsSection />
      <LecturesSection />
      <GuildMemberSection />
      <Footer />
    </>
  );
}

export default DashBoardPage;
