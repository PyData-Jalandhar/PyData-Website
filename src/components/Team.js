import React from "react";
import styled from "styled-components";
import "./index.scss";

const TeamContainer = styled.div`
  min-height: 500px;
  width: 100%;
`;

const Heading = styled.p`
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  width: 87.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 10px;
  margin: 30px 20px;
`;

export default class Team extends React.Component {
  render() {
    return (
      <TeamContainer>
        <div class=" column has-text-centered">
          <Heading className="is-size-2 has-text-black">Team Members</Heading>
        </div>
        <CardContainer>
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_280/v1561111941/Pydata/shruti_wskxnr.jpg"
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
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,f_auto,h_320,w_280/v1561109758/Pydata/abhay_ffbypb.jpg"
                  class="img-responsive"
                  alt=""
                />
                <span class="cards--three__rect-1">
                  <span class="shadow-1" />
                  <p>Abhay Puri</p>
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
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,h_320,w_280/v1561113273/Pydata/harsh_c4w8o3.jpg"
                  class="img-responsive"
                  alt=""
                />
                <span class="cards--three__rect-1">
                  <span class="shadow-1" />
                  <p>Harsh</p>
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
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,f_auto,h_320,w_280/v1561113436/Pydata/saurabh_gvhugn.jpg"
                  class="img-responsive"
                  alt=""
                />
                <span class="cards--three__rect-1">
                  <span class="shadow-1" />
                  <p>Saurabh Wani</p>
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
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,f_auto,h_320,w_280/v1561109758/Pydata/abhay_ffbypb.jpg"
                  class="img-responsive"
                  alt=""
                />
                <span class="cards--three__rect-1">
                  <span class="shadow-1" />
                  <p>Chris Levnon</p>
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
          <Card>
            <div class="card__collection clear-fix">
              <div class="cards cards--three">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/c_scale,f_auto,h_320,w_280/v1561109758/Pydata/abhay_ffbypb.jpg"
                  class="img-responsive"
                  alt=""
                />
                <span class="cards--three__rect-1">
                  <span class="shadow-1" />
                  <p>Chris Levnon</p>
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
        </CardContainer>
      </TeamContainer>
    );
  }
}
