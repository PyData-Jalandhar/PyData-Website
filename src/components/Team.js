import React from "react";
import styled from "styled-components";
import TeamsCard from "../common/TeamsCard";
import "./index.scss";

const TeamContainer = styled.div`
  min-height: 500px;
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.p`
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MEMBERS_DATA = [
  {
    name: "Abhay Puri",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561109758/Pydata/abhay_ffbypb.jpg"
  },
  {
    name: "Anushka Beri",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561139289/Pydata/anushka_svl7ux.jpg"
  },
  {
    name: "Rahul Syal",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_330,w_270/v1561139880/Pydata/rahuls_ktpqku.jpg"
  },
  {
    name: "Saurabh Wani",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561140860/Pydata/saurabh_gvhugn.jpg"
  },
  {
    name: "Harsh",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561113273/Pydata/harsh_c4w8o3.jpg"
  },
  {
    name: "Shruti Kalra",
    imageUrl:
      "https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561111941/Pydata/shruti_wskxnr.jpg"
  }
];

export default class Team extends React.Component {
  render() {
    return (
      <TeamContainer>
        <div class=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">Team Members</Heading>
        </div>
        <CardContainer>
          <TeamsCard data={MEMBERS_DATA} />
        </CardContainer>
      </TeamContainer>
    );
  }
}
