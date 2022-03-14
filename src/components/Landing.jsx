import React from "react";
import styled, { keyframes } from "styled-components";
import myImage from "../images/back.png";
import bgLanding from "../images/japanStore.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bgLanding});
`;

const TextContainer = styled.div`
  padding: 600px 0px 0px 100px;
  color: #fff;
  position: absolute;
  bottom: 8%;
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
  z-index: 2;
`;

const Desc = styled.h3`
  color: white;
  margin: 20px 0px;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const RowButton = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkText = styled.span`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  margin-right: 20px;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
`;

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>KIET DIEP</Title>
          <Desc>New Grad Full-Stack Developer</Desc>
          <RowButton>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <LinkText>Explore My Page</LinkText>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <LinkText>
                Contact Me <span>&#x27F6;</span>
              </LinkText>
            </Link>
            <LinkText style={{ border: "none" }}>
              Click the About Tab to learn more about me
            </LinkText>
          </RowButton>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default Landing;
