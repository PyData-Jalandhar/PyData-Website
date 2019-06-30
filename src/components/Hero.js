import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Background = styled.section`
  background-image: url(https://res.cloudinary.com/dssa0shmr/image/upload/v1561878634/Pydata/landing_image_ogbjkn.jpg);
  background-size: cover;
  background-attachment: fixed;
`;
const HeadingContainer = styled.div`
  max-width: 900px;
  @media (min-width: 1200px) {
    min-width: 1000px;
  }
  @media (min-width: 1440px) {
    min-width: 1100px;
  }
  @media (min-width: 1680px) {
    min-width: 1200px;
  }
`;

export default class Hero extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <section className="hero is-fullheight">
          <div className="hero-body">
            <HeadingContainer className="container">
              <p className="title has-text-white is-size-1">PyData Jalandhar</p>
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
