import React from "react";
import styled from "styled-components";
import "../components/Portfolio.css";
import contactBg from "../images/japanStore.jpg";

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
  justify-content: center;
  align-items: center;
  float: left;
`;

const Portfolio = () => {
  return (
    <Container>
      <Wrapper>
        <div className="row">
          <div className="card card1">
            <div className="card-content">
              <h2 className="card-title">Twitter Scraper</h2>
              <h5 className="card-body">
                Retrieves Twitter data and displays the most relevant tweets
                based on the user input
              </h5>
              <a
                href="https://github.com/kietdiep/twitter-scraper"
                className="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="card card2">
            <div className="card-content">
              <h2 className="card-title">Stock Tracker</h2>
              <h5 className="card-body">
                Retrieves and visualizes stock data to show trends in a
                company's stock value over a given time period
              </h5>
              <a
                href="https://github.com/kietdiep/Stock_app"
                className="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="card card3">
            <div className="card-content">
              <h2 className="card-title">Soon To come</h2>
              <h5 className="card-body">
                More to come as I spend my time broadening my developing skills!
                Stay tuned to watch my growth
              </h5>
              <a href="#" className="button">
                Learn More
              </a>
            </div>
          </div>
          <div className="card card4">
            <div className="card-content">
              <h2 className="card-title">Soon To come</h2>
              <h5 className="card-body">
                More to come as I spend my time broadening my developing skills!
                Stay tuned to watch my growth
              </h5>
              <a href="#" className="button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Portfolio;
