import { useEffect, useState } from "react";
import useVisibleComponent from "../../../hooks/useVisibleComponent";
import {
  LecturesSectionContainer,
  SectionTitle,
  CardContainer,
  Card,
  CardIcon,
  CardIconWrapper,
  CardHeader,
  CardBody,
  LanguageTitle,
  Description,
} from "./lectures-section-elements";

function LecturesSection() {
  const opacity = useVisibleComponent("lectures");

  return (
    <LecturesSectionContainer opacity={opacity} id="lectures">
      <SectionTitle>findYourSkills()</SectionTitle>
      <CardContainer>
        <Card>
          <CardHeader>
            <CardIconWrapper>
              <CardIcon />
            </CardIconWrapper>
          </CardHeader>
          <CardBody>
            <LanguageTitle>Angular</LanguageTitle>
            <Description>
              Learn one way to build application with Angular and reuse you code
              and abilities to build apps for any development
            </Description>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardIconWrapper>
              <CardIcon />
            </CardIconWrapper>
          </CardHeader>
          <CardBody>
            <LanguageTitle>React</LanguageTitle>
            <Description>
              A javascript library for building user interfaces
            </Description>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardIconWrapper>
              <CardIcon />
            </CardIconWrapper>
          </CardHeader>
          <CardBody>
            <LanguageTitle>Javascript: The Advanced Concept</LanguageTitle>
            <Description>
              Learn modern advanced Javascript pratices and be in the top 10% of
              Javascript developers
            </Description>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardIconWrapper>
              <CardIcon />
            </CardIconWrapper>
          </CardHeader>
          <CardBody>
            <LanguageTitle>HTML CSS</LanguageTitle>
            <Description>
              Explore how to build amazing interative and dynamic website using
              HTML-CSS
            </Description>
          </CardBody>
        </Card>
      </CardContainer>
    </LecturesSectionContainer>
  );
}

export default LecturesSection;
