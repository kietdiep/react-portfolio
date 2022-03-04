import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

const Social = styled.div`
  position: absolute;
  right: 5%;
  bottom: 8%;
  z-index: 5;
`;

const SocialImg = styled.img`
  width: 25px;
  display: block;
  margin: 25px 5px;
`;

const Footer = () => {
  return (
    <Social>
      <a href="https://github.com/kietdiep">
        <SocialImg src={github}></SocialImg>
      </a>
      <Link to="https://www.linkedin.com/in/kietdiep/">
        <SocialImg src={linkedin}></SocialImg>
      </Link>
    </Social>
  );
};

export default Footer;
