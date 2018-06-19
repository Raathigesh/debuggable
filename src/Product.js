import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  width: 300px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ffc100;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 28px;
`;

const Icon = styled.img`
  height: 30px;
`;

const Name = styled.div``;

const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #696969;
  font-weight: 600;
`;

export default function Product({ url, desc, logo }) {
  return (
    <Link href={url} target="_blank">
      <ProductContainer href={url} target="_blank">
        <Header>
          <Icon src={logo} />
        </Header>
        <Description>{desc}</Description>
      </ProductContainer>
    </Link>
  );
}
