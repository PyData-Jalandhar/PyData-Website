import React, { Component } from "react";
import styled from "styled-components";
import "../components/index.scss";

const Card = styled.div`
  height: 300px;
  width: 250px;
  border-radius: 10px;
  margin: 33px 0px;
  `;

export default class TeamsCard extends Component {
  cards = () => {
    const { data } = this.props;
    return data.map(member => (
      <Card>
        <div class="card__collection clear-fix">
          <div class="cards cards--three">
            <img src={member.imageUrl} class="img-responsive" alt="" />
            <span class="cards--three__rect-1">
              <span class="shadow-1" />
              <p>{member.name}</p>
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
    ));
  };
  render() {
    return this.cards();
  }
}
