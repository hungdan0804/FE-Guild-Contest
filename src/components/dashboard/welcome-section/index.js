import {
  WelcomeSectionContainer,
  ExpandIcon,
  GuildName,
  GettingStartedButton,
  WelcomeMessage,
  WelcomeMessageContainer,
} from "./welcome-section-elements";

function WelcomeSection() {
  return (
    <WelcomeSectionContainer id="home">
      <WelcomeMessageContainer>
        <WelcomeMessage>W</WelcomeMessage>
        <WelcomeMessage>e</WelcomeMessage>
        <WelcomeMessage>l</WelcomeMessage>
        <WelcomeMessage>c</WelcomeMessage>
        <WelcomeMessage>o</WelcomeMessage>
        <WelcomeMessage>m</WelcomeMessage>
        <WelcomeMessage>e</WelcomeMessage>
        <WelcomeMessage> </WelcomeMessage>
        <WelcomeMessage>t</WelcomeMessage>
        <WelcomeMessage>o</WelcomeMessage>
      </WelcomeMessageContainer>
      <GuildName>Front-End Guild</GuildName>
      <GettingStartedButton to="about"> gettingStarted()</GettingStartedButton>
      <ExpandIcon />
    </WelcomeSectionContainer>
  );
}

export default WelcomeSection;
