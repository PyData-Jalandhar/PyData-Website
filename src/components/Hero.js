import React from "react";
import styled from "styled-components";
import Image from "../assets/hero6.jpg";
import Header from "./Header";

const Background = styled.section`
  background-image: url(${Image});
  background-size: cover;
  background-attachment: fixed;
`;
const HeadingContainer = styled.div`
  max-width: 900px;
`;

export default class Hero extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <section className="hero is-fullheight">
          <div className="hero-body">
            <HeadingContainer className="container">
              <p className="title has-text-white is-size-2">PyData Jalandhar</p>
              <h2 className="subtitle has-text-white is-size-4">
                Become a part of the largest open source community.
              </h2>
            </HeadingContainer>
          </div>
        </section>
      </Background>
    );
  }
}
