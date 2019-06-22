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

const Text = styled.h2`
    @media only screen and (max-width:768px) {
        text-align:center;
    }
`;

const Description = styled.h3`
    @media only screen and (max-width:768px) {
        text-align:center;
    }
`;

const ImageOne = styled.div`
  background-image: url(${PictureOne});
  background-size: cover;
  height: 20rem;
  width: 20rem;
  @media only screen and (max-width:768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
`;

const ImageTwo = styled.div`
  background-image: url(${PictureTwo});
  background-size: cover;
  height: 20rem;
  width: 20rem;@media only screen and (max-width:768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
`;

export default class AboutUs extends React.Component {
  render() {
    return (
      <section class="container-is-fluid" id="about">
        <div class=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">About Us</Heading>
        </div>
        <div className="container has-text-centered">
          <p className="is-size-5 has-text-grey">
            PyData is an educational program of NumFOCUS, a non-profit
            organization in the United States. PyData provides a forum for the
            international community of users and developers of data analysis
            tools to share ideas and learn from each other.
          </p>
        </div>

        <Space className="columns" />

        <div className="columns is-vcentered">
          <div className="column is-3 is-offset-2" >
              <ImageOne />
          </div>
          <div className="column is-5 has-text-justified">
            <Text className="is-size-3 has-text-weight-bold has-text-black">
              Open-Source Community
            </Text>
            <br />
            <br />
            <Description className="is-size-5 has-text-grey">
              Our community is diverse and highly motivated. It helps to help
              create and maintain communication within and among open source
              projects; motivate and efficiency organize groups of remote
              individuals.
            </Description>
          </div>
        </div>


        <div className="columns is-vcentered">
          <div className="column is-3 is-offset-2" >
              <ImageTwo />
          </div>
          <div className="column is-5 has-text-justified">
            <Text className="is-size-3 has-text-weight-bold has-text-black">
              Meetups
            </Text>
            <br />
            <br />
            <Description className="is-size-5 has-text-grey">
            Meetups are the best way to collaborate. They help the community
              to grow not only in context to members but also contributing to
              giving talks and making members aware of latest technological
              trends and making them learna and work on new things.
            </Description>
          </div>
        </div>
      </section>
    );
  }
}
