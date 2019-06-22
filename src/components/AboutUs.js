import React from "react";
import styled from "styled-components";
import PictureOne from "../assets/picture1.png";
import PictureTwo from "../assets/picture2.png";

const Heading = styled.p`
  margin-top: 2rem;
`;

const Space = styled.div`
  height: 3rem;
  width: 100%;
`;
const AboutSections = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const ImageOne = styled.div`
  background-image: url(${PictureOne});
  background-size: cover;
  height: 30rem;
  width: 400px;
`;

const ImageTwo = styled.div`
  background-image: url(${PictureTwo});
  background-size: cover;
  height: 30rem;
  width: 100%;
`;

export default class AboutUs extends React.Component {
  render() {
    return (
      <section class="hero is-large" id="about">
        <div class=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">About Us</Heading>
        </div>
        <div className="column is-8 is-offset-2 has-text-centered">
          <p className="is-size-5 has-text-grey">
            PyData is an educational program of NumFOCUS, a non-profit
            organization in the United States. PyData provides a forum for the
            international community of users and developers of data analysis
            tools to share ideas and learn from each other.
          </p>
        </div>

        <Space className="columns" />

        <AboutSections className="columns is-vcentered">
          <ImageOne className="column is-5" />
          <div className="column is-7 has-text-justified">
            <h2 className="is-size-4 has-text-weight-bold has-text-black">
              Open-Source Community
            </h2>
            <br />
            <br />
            <h3 className="is-size-5 has-text-grey">
              Our community is diverse and highly motivated. It helps to help
              create and maintain communication within and among open source
              projects; motivate and efficiency organize groups of remote
              individuals.
            </h3>
          </div>
        </AboutSections>

        <AboutSections className="columns is-vcentered">
          <div className="column is-7 has-text-justified">
            <h2 className="is-size-4 has-text-weight-bold has-text-black">
              Meetups
            </h2>{" "}
            <br />
            <br />
            <h3 className="is-size-5 has-text-grey">
              Meetups are the best way to collaborate. They help the community
              to grow not only in context to members but also contributing to
              giving talks and making members aware of latest technological
              trends and making them learna and work on new things.
            </h3>
          </div>
          <ImageTwo className="column is-5" />
        </AboutSections>
      </section>
    );
  }
}
