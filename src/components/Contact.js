import React from "react";
import styled from "styled-components";

const Heading = styled.span`
  margin-top: 2rem;
`;

const Box = styled.input`
  &::placeholder {
    color: lightgrey;
  }
`;

const BoxTwo = styled.textarea`
  &::placeholder {
    color: lightgrey;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #60469b;
`;

const Text = styled.p`
  color: #60469b;
`;

const Text1 = styled.p`
  color: #60469b;
  @media (max-width: 730px) {
    margin-bottom: 10px;
  }
`;

const Icon = styled.span`
  margin: 0.75rem;
`;

const FooterContainer = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 730px) {
    flex-direction: column;
  }
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

const FooterContent = styled.div`
  @media (max-width: 730px) {
    margin: 20px auto;
  }
`;

const Contact = () => (
  <div className="section" id="contact">
    <div className="columns">
      <div className="column has-text-centered">
        <Heading className="is-size-2 has-text-black">Contact</Heading>
        <br />
        <div className="column has-text-centered">
          <span className="is-size-4 has-text-weight-bold has-text-grey">
            We'd Love To Hear From You.
          </span>
          <br />
          <p
            style={{ fontSize: "15px" }}
            className="has-text-grey has-text-centered"
          >
            Ping us below for joining the community or for asking any queries.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="field">
            <label
              className="label has-text-black"
              style={{ fontSize: "16px" }}
            >
              Name
            </label>
            <div className="control">
              <Box
                id="name"
                className="input has-text-black"
                type="text"
                placeholder="Name"
                style={{ height: "35px" }}
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label has-text-black"
              style={{ fontSize: "16px" }}
            >
              Email
            </label>
            <div className="control">
              <Box
                id="email"
                className="input has-text-black"
                type="text"
                placeholder="Email"
                style={{ height: "35px" }}
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label has-text-black"
              style={{ fontSize: "16px" }}
            >
              Subject
            </label>
            <div className="control">
              <Box
                id="subject"
                className="input has-text-black"
                type="text"
                placeholder="Subject"
                style={{ height: "35px" }}
              />
            </div>
          </div>
          <div className="field">
            <label
              className="label has-text-black"
              style={{ fontSize: "16px" }}
            >
              Message
            </label>
            <div className="control">
              <BoxTwo
                id="message"
                // eslint-disable-next-line max-len
                className="textarea has-text-black"
                rows="2"
                placeholder="Message"
              />
            </div>
          </div>
          <br />
          <div className="columns">
            <div className="column has-text-centered">
              <Button className=" button is-size-5 has-text-light">
                Submit
              </Button>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterContainer>
      <FooterContent className="has-text-centered">
        <p />
        <Text1 className="is-size-5">FOLLOW US</Text1>
        <p className="is-size-5 has-text-grey has-text-centered">
          <Icon>
            <a href="https://www.instagram.com/pyjalandhar/" target="blank_">
              <i className="is-size-3 fab fa-instagram has-text-grey" />
            </a>
          </Icon>
          <Icon>
            <a href="https://twitter.com/PydataJ" target="blank_">
              <i className="is-size-3 fab fa-twitter-square has-text-grey" />
            </a>
          </Icon>
          <Icon>
            <a href="https://www.facebook.com/pydatajalandhar/" target="blank_">
              <i className="is-size-3 fab fa-facebook-square has-text-grey" />
            </a>
          </Icon>
        </p>
      </FooterContent>
      <FooterContent className="has-text-centered">
        <p />
        <Text className="is-size-5">EMAIL</Text>
        <p className="is-size-5 has-text-grey has-text-centered">
          pydatajalandhar@gmail.com
        </p>
      </FooterContent>
      <FooterContent className="has-text-centered">
        <p />
        <Text className="is-size-5">CALL US AT</Text>
        <p className="is-size-5 has-text-grey has-text-centered">
          +91 9646895049
        </p>
      </FooterContent>
    </FooterContainer>
  </div>
);
export default Contact;
