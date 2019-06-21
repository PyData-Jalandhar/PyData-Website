import React, { Component } from "react";
import styled from "styled-components";
import "../components/index.scss";

const Card = styled.div`
  height: 300px;
  width: 250px;
  border-radius: 10px;
  margin: 30px 20px;
`;

export default class TeamsCard extends Component {
  render() {
    return (
      <Card>
      <div class="card__collection clear-fix">
        <div class="cards cards--three">
          <img
            src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_270/v1561111941/Pydata/shruti_wskxnr.jpg"
            class="img-responsive"
            alt=""
          />
          <span class="cards--three__rect-1">
            <span class="shadow-1" />
            <p>Shruti Kalra</p>
          </span>
          <span class="cards--three__rect-2">
            <span class="shadow-2" />
          </span>
          <span class="cards--three__circle" />
          <ul class="cards--three__list">
            <li>
              <i class="fab fa-facebook-f" />
            </li>
            <li>
              <i class="fab fa-twitter" />
            </li>
            <li>
              <i class="fab fa-linkedin-in" />
            </li>
          </ul>
        </div>
      </div>
      </Card>
    );
  }
}
