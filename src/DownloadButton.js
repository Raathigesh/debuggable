import React from "react";
import styled from "styled-components";

const Button = styled.a`
  background-color: #c44d58;
  border: none;
  color: white;
  padding: 15px 32px;
  margin-right: 10px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  font-family: "Raleway Light", sans-serif;
  font-weight: bold;
  text-decoration: initial;

  &:hover {
    background-color: #fb4f5f;
  }
`;

export default function DownloadButton({ name, ...props }) {
  return <Button {...props}>{name}</Button>;
}
