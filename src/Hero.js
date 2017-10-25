import React from "react";
import styled from "styled-components";
import media from "./MediaUtil";

const HeroGrid = styled.div`
  display: flex;
  background-color: #f4effb;
  ${media.tablet`flex-direction: column;`} ${media.phone`flex-direction: column;`};
`;

const DetailPanel = styled.div`
  padding: 100px;
  padding-right: 50px;
  ${media.tablet`padding: ${props =>
    props.theme.mainMargin
      .tablet}; text-align: center;`} ${media.phone`padding: ${props =>
      props.theme.mainMargin.phone}; text-align: center;`};
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 490px;
  ${media.tablet`font-size: 20px; margin-top: 15px; margin-bottom: 15px; max-width: 100%;`};
  ${media.phone`font-size: 20px; margin-top: 5px; margin-bottom: 5px;  max-width: 100%;`};
`;

const SubTitle = styled.div`
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  ${media.tablet`font-size: 12px; margin-top: 20px; margin-bottom: 20px;`};
  ${media.phone`font-size: 12px; margin-top: 20px; margin-bottom: 20px; `};
`;

const DownloadButton = styled.a`
  font-size: 20px;
  color: #8045ce;
  margin-right: 25px;
  text-decoration: none;
  padding: 4px;

  &:hover {
    background-color: #773ac5;
    color: white;
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  margin-right: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${media.tablet`margin-left: 5px; margin-right: 5px;`} ${media.phone`margin-left: 5px; margin-right: 5px;`};
`;

const Image = styled.img`
  margin: auto;
  max-width: 100%;
  width: auto;
  height: auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  border: 1px solid #e0caff;
`;

const LogoImage = styled.img`
  height: 125px;
  ${media.tablet`height: 70px;`};
  ${media.phone`height: 50px;`};
`;

const Hero = () => (
  <HeroGrid>
    <DetailPanel>
      <LogoImage src={require("./images/wiretap.png")} />
      <Title>A desktop app for inspecting mobx and mobx state tree apps</Title>
      <SubTitle>
        The dev tool your mobx and mobx-state-tree app deserve
      </SubTitle>
      <DownloadButton
        href="https://github.com/Raathigesh/wiretap"
        target="_blank"
      >
        Windows
      </DownloadButton>
      <DownloadButton
        href="https://github.com/Raathigesh/wiretap"
        target="_blank"
      >
        Mac
      </DownloadButton>
      <DownloadButton
        href="https://github.com/Raathigesh/wiretap"
        target="_blank"
      >
        Github
      </DownloadButton>
    </DetailPanel>

    <ImageContainer>
      <Image src={require("./images/wiretap.gif")} />
    </ImageContainer>
  </HeroGrid>
);

export default Hero;
