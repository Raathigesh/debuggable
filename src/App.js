import React from "react";
import styled from "styled-components";
import Product from "./Product";

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

const Logo = styled.img`
  margin-top: 50px;
  margin-bottom: 50px;
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

const IndexPage = () => (
  <Container>
    <Logo src={require("./assets/logo.png")} />
    <Products>
      <Product
        name="Atmo"
        logo={require("./assets/atmo.png")}
        url={"http://getatmo.com"}
      />
      <Product
        name="Wiretap"
        logo={require("./assets/wiretap.png")}
        url={"http://wiretap.debuggable.io"}
      />
    </Products>
    <Footer>
      Side projects by{" "}
      <a href="https://twitter.com/Raathigesh" target="_blank">
        Raathigeshan
      </a>
    </Footer>
  </Container>
);

export default IndexPage;
