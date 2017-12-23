import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
    flex-direction: column-reverse;
  `};
`;

const Header = styled.div`
  font-weight: 900;
  color: #c5515c;
  font-size: 32px;
  margin-bottom: 5px;
  margin-top: 20px;
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
  margin-left: 100px;
  ${media.lessThan("medium")`
    margin-left: 0px;
    text-align: center;
  `};
`;

const Left = styled.div``;

export default function Feature1({ image, header, subheader }) {
  return (
    <Container>
      <Left>
        <img src={image} />
      </Left>
      <Right>
        <Header>{header}</Header>
        <SubText>{subheader}</SubText>
      </Right>
    </Container>
  );
}
