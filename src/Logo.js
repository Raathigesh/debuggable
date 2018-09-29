import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: auto;
  align-content: space-around;
  margin-bottom: 50px;
`;

const LogoText = styled.div`
  display: flex;
  font-size: 35px;
  font-weight: 400;
  color: #484646;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 5px;
`;

const Highlight = styled.span`
  background-color: #3e4245;
  color: #ffc100;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 3px;
`;

const SloganText = styled.div`
  display: flex;
  font-size: 22px;
`;

export default function() {
  return (
    <Container>
      <LogoText>Debuggable</LogoText>
      <SloganText>
        Tools for great <Highlight>developer experience</Highlight>
      </SloganText>
    </Container>
  );
}
