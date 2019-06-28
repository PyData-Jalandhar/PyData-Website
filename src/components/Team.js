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
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561741766/Pydata/abhay_ffbypb.jpg"
  },
  {
    name: "Anushka Beri",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561219283/Pydata/anushka.jpg"
  },
  {
    name: "Rahul Syal",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561139880/Pydata/rahuls_ktpqku.jpg"
  },
  {
    name: "Saurabh Wani",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561140860/Pydata/saurabh_gvhugn.jpg"
  },
  {
    name: "Harsh",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561113273/Pydata/harsh_c4w8o3.jpg"
  },
  {
    name: "Shruti Kalra",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/v1561111941/Pydata/shruti_wskxnr.jpg"
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
