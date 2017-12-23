import React from "react";
import styled, { injectGlobal } from "styled-components";
import Header from "./Header";
import RightFeature from "./RightFeature";
import LeftFeature from "./LeftFeature";
import Footer from './Footer';

injectGlobal`
body {
  background-color: #e3e3e3;
  min-height: 100vh;
}
`;

const IndexGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <IndexGrid>
    <Header />
    <RightFeature image={require("./images/feature1.png")} header={"Test Explorer"} subheader={"Locate tests with ease through the test explorer"}/>
    <LeftFeature image={require("./images/feature2.png")} header={"Quick Search"} subheader={"Search across your it statements"}/>
    <RightFeature image={require("./images/feature3.png")} header={"Coverage reports"} subheader={"Integrated converage reports"}/>
    <LeftFeature image={require("./images/feature4.png")} header={"Selective snapshot updates"} subheader={"Inline failure messages & Individual snapshot updates"}/>
    <Footer />
  </IndexGrid>
);

export default IndexPage;
