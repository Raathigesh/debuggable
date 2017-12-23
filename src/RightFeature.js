import React from "react";
import styled from "styled-components";
import { my, px } from "styled-components-spacing";
import media from "styled-media-query";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: right;
  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
  `};
`;

const Header = styled.div`
  font-weight: 900;
  color: #c5515c;
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const SubText = styled.div`
  font-weight: 700;
  color: #696969;
  font-size: 15px;
  margin-bottom: 20px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;
  ${media.lessThan("medium")`
    margin-right: 0px;
    text-align: center;
  `};
`;

const Left = styled.div``;

export default function Feature1({ image, header, subheader }) {
  return (
    <Container>
      <Right>
        <Header>{header}</Header>
        <SubText>{subheader}</SubText>
      </Right>
      <Left>
        <img src={image} />
      </Left>
    </Container>
  );
}
