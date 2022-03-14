import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import contactBg from "../images/japanStore.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/Mail";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Container = styled.div`
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${contactBg});
  padding: 0 15%;
  justify-content: center;
  align-items: center;
  float: left;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 2;
  max-width: 700px;
`;

const ContactList = styled.div`
  max-width: 500px;
  padding-left: 50px;
  line-height: 70px;
`;
const ContactItem = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Form = styled.form``;

const Row = styled.div`
  display: flex;
`;

const Input = styled.input`
  background: #000;
  color: #fff;
  border: none;
  width: 400px;
  height: 50px;
  padding: 12px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  opacity: 0.9;
`;

const TextArea = styled.textarea`
  background: #000;
  color: #fff;
  border: none;
  width: 97%;
  padding: 12px;
  font-size: 15px;
  min-height: 200px;
  max-height: 300px;
  resize: vertical;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  opacity: 0.9;
`;

const SendButton = styled.input`
  float: right;
  background: #2e94e3;
  color: #fff;
  border: none;
  width: 120px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  transition-property: background;
  &:hover {
    background: #0582e3;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddsnhwt",
        "template_zmtuoan",
        form.current,
        "GzEUPy-AOooNuHc1b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <ContactList>
            <ContactItem>
              <LocationOnOutlinedIcon />
              &nbsp; Westminster, California, USA
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon />
              &nbsp; kietddiep@gmail.com
            </ContactItem>
            <ContactItem>
              <LocalPhoneOutlinedIcon />
              &nbsp; +714 363 6210
            </ContactItem>
            <ContactItem>
              <WatchLaterIcon />
              &nbsp; Mon - Fri 8:00 AM - 5:00 PM
            </ContactItem>
          </ContactList>
        </Left>
        <Right>
          <Title>Contact Me</Title>
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
              ></Input>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                style={{ marginLeft: "20px" }}
                required
              ></Input>
            </Row>
            <TextArea
              name="message"
              placeholder="Your Message"
              required
            ></TextArea>
            <SendButton type="submit" value="Send"></SendButton>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
