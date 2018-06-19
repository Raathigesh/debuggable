import React from "react";
import styled from "styled-components";
import Product from "./Product";
import Logo from "./Logo";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: gray;
  align-items: center;
  min-height: 100vh;
`;

const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.span`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 13px;
  & > a {
    text-decoration: none;
  }
`;

const Highlight = styled.span`
  color: #ffc100;
  border-bottom: 1px solid #484646;
`;

const IndexPage = () => (
  <Container>
    <Logo />
    <Products>
      <Product
        desc="Zero config UI for Jest. Reinventing your test
        experience."
        logo={require("./assets/majestic.png")}
        url={"https://majestic.debuggable.io"}
      />
      <Product
        desc="Mock APIs for your prototypes and
        experiments."
        logo={require("./assets/atmo.png")}
        url={"http://getatmo.com/"}
      />
      <Product
        desc="A desktop app for inspecting mobx and
        mobx state tree apps"
        logo={require("./assets/wiretap.png")}
        url={"http://wiretap.debuggable.io"}
      />
    </Products>
    <Footer>
      Built by{" "}
      <a href="https://twitter.com/Raathigesh" target="_blank">
        <Highlight>Raathigeshan</Highlight>
      </a>{" "}
      and contributors
    </Footer>
  </Container>
);

export default IndexPage;
