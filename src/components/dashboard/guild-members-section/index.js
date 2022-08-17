import { useEffect, useState } from "react";
import useVisibleComponent from "../../../hooks/useVisibleComponent";
import {
  GuildMembersSectionContainer,
  SectionTitle,
  SliderContainer,
  SliderButton,
  SliderTool,
  SliderList,
  SliderItem,
  SliderCard,
  SliderCardImage,
  SliderCardTitle,
  SliderCardDescription,
} from "./guild-members-section-element";

function GuildMemberSection() {
  const opacity = useVisibleComponent("members");

  return (
    <GuildMembersSectionContainer opacity={opacity} id="members">
      <SectionTitle>getMembers()</SectionTitle>
      <SliderContainer>
        <SliderTool>
          <SliderButton>&#60;</SliderButton>
          <SliderButton>&#62;</SliderButton>
        </SliderTool>
        <SliderList>
          <SliderItem>
            <SliderCard>
              <SliderCardImage src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" />
              <SliderCardTitle>Kelvin David</SliderCardTitle>
              <SliderCardDescription>Developer</SliderCardDescription>
            </SliderCard>
          </SliderItem>
          <SliderItem>
            <SliderCard>
              <SliderCardImage src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000" />
              <SliderCardTitle>Maria Jane</SliderCardTitle>
              <SliderCardDescription>Manager</SliderCardDescription>
            </SliderCard>
          </SliderItem>
          <SliderItem>
            <SliderCard>
              <SliderCardImage src="https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?w=2000" />
              <SliderCardTitle>Jane Foster</SliderCardTitle>
              <SliderCardDescription>Tester</SliderCardDescription>
            </SliderCard>
          </SliderItem>
        </SliderList>
      </SliderContainer>
    </GuildMembersSectionContainer>
  );
}

export default GuildMemberSection;
