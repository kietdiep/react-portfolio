import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  position: fixed;
  z-index: 2;
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
  align-items: center;
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
          <Link to="/react-portfolio" style={{ color: "white" }}>
            <Logo>KD.</Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Portfolio</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
