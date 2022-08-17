import { useEffect, useState } from "react";
import useVisibleComponent from "../../../hooks/useVisibleComponent";
import {
  AboutUsSectionContainer,
  Card,
  CardContainer,
  NumberMessage,
  SectionTitle,
  Description,
} from "./about-us-section-elements";

function AboutUsSection() {
  const opacity = useVisibleComponent("about");

  return (
    <AboutUsSectionContainer opacity={opacity} id="about">
      <SectionTitle>discoverOurGuild()</SectionTitle>
      <CardContainer>
        <Card id="card-1">
          <NumberMessage>23.456</NumberMessage>
          <Description>Happy members</Description>
        </Card>
        <Card id="card-2">
          <NumberMessage>103</NumberMessage>
          <Description>Lectures</Description>
        </Card>
        <Card id="card-3">
          <NumberMessage>21k</NumberMessage>
          <Description>Questions Solved</Description>
        </Card>
      </CardContainer>
    </AboutUsSectionContainer>
  );
}

export default AboutUsSection;
