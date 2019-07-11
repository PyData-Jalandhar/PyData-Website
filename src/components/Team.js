import React from "react";
import styled from "styled-components";
import TeamsCard from "../common/TeamsCard";

const TeamContainer = styled.div`
  min-height: 500px;
  max-width: 900px;
  margin: 10px auto;
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (min-width: 1440px) {
    max-width: 1100px;
  }
  @media (min-width: 1680px) {
    max-width: 1200px;
  }
`;

const Heading = styled.p`
  margin-top: 3.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 781px) {
    justify-content: space-around;
    margin: 0 10px;
  }
`;

const MEMBERS_DATA = [
  {
    name: "Abhay Puri",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/abhay_upl6z2.jpg",
    linkedIn: "https://in.linkedin.com/in/abhaypuri98",
    twitter: "http://www.twitter.com/abhaypuri98",
    facebook: "https://m.facebook.com/abhay.puri.14"
  },
  {
    name: "Anushka Beri",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/anushka_ilpacf.jpg",
    linkedIn: "https://www.linkedin.com/in/anushka-beri-1b767a140",
    twitter: "https://twitter.com/thisbutterfly",
    facebook: "https://m.facebook.com/thisbutterfly"
  },
  {
    name: "Rahul Syal",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/rahuls_wuro1z.jpg",
      linkedIn:"https://www.linkedin.com/in/rahul-syal-646380151",
      facebook: "https://m.facebook.com/rahul.syal.5661",
  },
  {
    name: "Saurabh Wani",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878961/Pydata/saurabh_bp5aqw.jpg",
    linkedIn: "https://www.linkedin.com/in/saurabh-wani",
    twitter: "https://twitter.com/SaurabhWani10",
    facebook: "https://www.facebook.com/saurabh.wani.921"
  },
  {
    name: "Harsh",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/harsh_xmgdna.jpg"
  },
  {
    name: "Shruti Kalra",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878959/Pydata/shruti_bgqvz8.jpg"
  }
];

export default class Team extends React.Component {
  render() {
    return (
      <TeamContainer id="team">
        <div className=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">Team Members</Heading>
        </div>
        <CardContainer>
          <TeamsCard data={MEMBERS_DATA} />
        </CardContainer>
      </TeamContainer>
    );
  }
}
