import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

const InfoContainer = styled.div`
  padding-left: 100px;
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  margin-left: auto;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  /* flex: 2; */
  /* text-align: center; */
`;

const Title = styled.h1`
  color: rgb(251, 250, 245);
  font-size: 70px;
`;

const Desc = styled.h3`
  color: rgb(251, 250, 245);
  inline-size: auto;
  font-size: 40px;
`;

const Pic = styled.img`
  max-width: 80%;
  height: auto;
  border: 1px solid #fff;
  border-radius: 8px;
`;

const UL = styled.ul`
  list-style: none;
`;

const LI = styled.li`
  color: rgb(251, 250, 245);
  font-size: 30px;
  font-weight: 500;
`;

const Listrow = styled.div`
  clear: both;
`;
const Listcolumn = styled.div`
  width: 45%;
  float: left;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} img={item.img}>
            <InfoContainer>
              <Left>
                <Pic src={item.img2}></Pic>
              </Left>
              <Right>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Listrow>
                  <Listcolumn>
                    <UL>
                      <LI>{item.list[0]}</LI>
                      <LI>{item.list[1]}</LI>
                      <LI>{item.list[2]}</LI>
                      <LI>{item.list[3]}</LI>
                      <LI>{item.list[4]}</LI>
                      <LI>{item.list[5]}</LI>
                      <LI>{item.list[6]}</LI>
                      <LI>{item.list[7]}</LI>
                    </UL>
                  </Listcolumn>
                  <Listcolumn>
                    <UL>
                      <LI>{item.list[8]}</LI>
                      <LI>{item.list[9]}</LI>
                      <LI>{item.list[10]}</LI>
                      <LI>{item.list[11]}</LI>
                      <LI>{item.list[12]}</LI>
                      <LI>{item.list[13]}</LI>
                      <LI>{item.list[14]}</LI>
                      <LI>{item.list[15]}</LI>
                    </UL>
                  </Listcolumn>
                  <Listcolumn>
                    <UL>
                      <LI style={{ textDecoration: "underline" }}>
                        {item.list2[0]}
                      </LI>
                      <LI style={{ textDecoration: "underline" }}>
                        {item.list2[1]}
                      </LI>
                      <LI style={{ textDecoration: "underline" }}>
                        {item.list2[2]}
                      </LI>
                    </UL>
                  </Listcolumn>
                </Listrow>
              </Right>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
