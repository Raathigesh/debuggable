import React from "react";
import styled from "styled-components";

const ProductContainer = styled.a`
  border-style: solid;
  border-width: 0.01388888888889in;
  border-color: rgb(192, 192, 192);
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: gray;

  & > img {
    width: 150px;
    height: 150px;
  }

  :hover {
    background-color: rgb(250, 250, 250);
  }
`;

export default function Product({ url, name, logo }) {
  return (
    <ProductContainer href={url} target="_blank">
      <img src={logo} />
      {name}
    </ProductContainer>
  );
}
