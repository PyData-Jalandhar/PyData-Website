import React, { Component } from "react";
import styled from "styled-components";
import "./index.scss";

const Card = styled.div`
  padding: 2px;
  border-radius: 10px;
  margin: 33px 0px;
`;

export default class TeamsCard extends Component {
  cards = () => {
    const { data } = this.props;
    return data.map((member, index) => (
      <Card key={index + 1}>
        <div className="card__collection clear-fix">
          <div className="cards cards--three">
            <img src={member.imageUrl} className="img-responsive" alt="" />
            <span className="cards--three__rect-1">
              <span className="shadow-1" />
              <p>{member.name}</p>
            </span>
            <span className="cards--three__rect-2">
              <span className="shadow-2" />
            </span>
            <span className="cards--three__circle" />
            <ul className="cards--three__list">
              <li>
                <i className="fab fa-facebook-f" />
              </li>
              <li>
                <i className="fab fa-twitter" />
              </li>
              <li>
                <i className="fab fa-linkedin-in" />
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
