import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Margin, Padding } from "styled-components-spacing";
import DownloadButton from "./DownloadButton";

const Container = styled(Padding)`
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slogan = styled.div`
  font-weight: 600;
  color: #c85a64;
  font-size: 20px;
  text-align: center;
`;

const Logo = styled.img`
  width: 300px;
`;

const Buttons = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Github = styled.a`
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
`;

const Screen = styled.img`
  margin-top: 20px;
  ${media.lessThan("large")`
    display: none;
  `};
`;

export default function Header() {
  return (
    <Container all={{ mobile: 2, tablet: 4, desktop: 5 }}>
      <Logo src={require("./images/logo.png")} />
      <Slogan>Zero Config desktop UI for Jest</Slogan>
      <Screen src={require("./images/Intro.png")} />
      <Buttons>
        <DownloadButton name="Windows App" />
        <DownloadButton name="Mac OS App" />
      </Buttons>
      <Github target="_blank" href="https://github.com/Raathigesh/majestic">
        ⭐ Visit Github
      </Github>
    </Container>
  );
}
