import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  position: absolute;
  z-index: 5;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
`;
const Right = styled.div`
  margin-left: 1200px;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  color: white;
  font-size: 30px;
  cursor: pointer;
  margin: 10px 30px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/react-portfolio"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Logo>KD.</Logo>
          </Link>
        </Left>
        <Right>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <MenuItem>About</MenuItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <MenuItem>Contact</MenuItem>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <MenuItem>Portfolio</MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
