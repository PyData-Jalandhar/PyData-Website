import React from "react";
import styled from "styled-components";

const Heading = styled.p`
  margin-top: 2rem;
`;

const SectionHeadings = styled.h2`
  margin-bottom: 10px;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 18px;
  }
`;

const AboutSection1 = styled.div`
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  text-align: justify;
  justify-content: space-between;
  @media (min-width: 1200px) {
    min-width: 1000px;
  }
  @media (min-width: 1440px) {
    min-width: 1100px;
  }
  @media (min-width: 1680px) {
    min-width: 1200px;
  }
  @media (max-width: 768px) {
    margin: 50px 20px;
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
  }
`;

const AboutSection2 = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  text-align: justify;  
  justify-content: space-between;
  @media (min-width: 1200px) {
    min-width: 1000px;
  }
  @media (min-width: 1440px) {
    min-width: 1100px;
  }
  @media (min-width: 1680px) {
    min-width: 1200px;
  }
  @media (max-width: 768px) {
    margin: 40px 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`;
const ImageOne = styled.div`
  background-image: url(https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/picture1_ijrene.png);
  background-size: cover;
  height: 22rem;
  width: 22rem;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageTwo = styled.div`
  background-image: url(https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/picture2_yq1ah7.png);
  background-size: cover;
  height: 23rem;
  width: 20rem;
  @media only screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default class AboutUs extends React.Component {
  render() {
    return (
      <section className="container-is-fluid" id="about">
        <div className=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">About Us</Heading>
        </div>
        <AboutSection1 className="has-text-centered">
          <p className="is-size-5 has-text-grey">
            PyData is an educational program of NumFOCUS, a non-profit
            organization in the United States. PyData provides a forum for the
            international community of users and developers of data analysis
            tools to share ideas and learn from each other.
          </p>
        </AboutSection1>
        <AboutSection1 className="columns is-vcentered">
          <div className="column is-5" id="first">
            <ImageOne />
          </div>
          <div className="column is-7" id="second">
            <SectionHeadings className="is-size-3 has-text-weight-bold has-text-black">
              Open-Source Community
            </SectionHeadings>
            <h3 className="is-size-5 has-text-grey">
              Our community is diverse and highly motivated. It helps to help
              create and maintain communication within and among open source
              projects; motivate and efficiency organize groups of remote
              individuals.
            </h3>
          </div>
        </AboutSection1>

        <AboutSection2 className="columns is-vcentered">
          <div className="column is-7" id="first">
            <SectionHeadings className="is-size-3 has-text-weight-bold has-text-black">
              Meetups
            </SectionHeadings>
            <h3 className="is-size-5 has-text-grey">
              Meetups are the best way to collaborate. They help the community
              to grow not only in context to members but also contributing to
              giving talks and making members aware of latest technological
              trends and making them learna and work on new things.
            </h3>
          </div>
          <div className="column is-5" id="second">
            <ImageTwo className="is-pulled-right" />
          </div>
        </AboutSection2>
      </section>
    );
  }
}
