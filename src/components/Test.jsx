import React from "react";
import styled, { keyframes } from "styled-components";
import myImage from "../images/back.png";

const TB = styled.div`
  position: absolute;
  bottom: 8%;
  background-color: black;
`;

const back = keyframes`
  100% {
    background-position: 2000px 0;
  }
`;
const Title = styled.h1`
  font-size: 190px;
  line-height: 160px;
  margin-left: -10px;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  background: url(${myImage});
  -webkit-background-clip: text;
  background-clip: none;
  background-position: 0 0;
  animation: ${back} 20s linear infinite;
`;

const Test = () => {
  return (
    <TB>
      <Title>Kiet Diep</Title>
    </TB>
  );
};

export default Test;
