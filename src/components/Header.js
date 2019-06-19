import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: transparent;
  padding-top: 1rem;
`;

const Heading = styled.span`
  margin-left: 2rem;
`;

const Text = styled.a`
  font-size: 15px;
`;

const Link = styled.a`
  color: #fff;
`

export default class Header extends React.Component {
  state = {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({
        backgroundColor: "white",
        color: "#4a4a4a",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)"
      });
    } else {
      this.setState({
        backgroundColor: "transparent",
        color: "white",
        boxShadow: "none"
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    const { backgroundColor, color, boxShadow } = this.state;
    return (
      <div className="container-fluid" id="home">
        <Navbar
          className="navbar is-fixed-top is-transparent"
          style={{
            backgroundColor,
            color,
            boxShadow,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem"
          }}
        >
          <div className="navbar-brand">
              <Link style={{ color }}><Heading className="is-size-3 has-text-weight-bold">PyData</Heading></Link>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <Text
                className="navbar-item"
                style={{ color }}
                href="#home"
              >
                Home
              </Text>
              <Text
                className="navbar-item"
                style={{ color }}
                href="#about"
              >
                About Us
              </Text>
              <Text
                className="navbar-item"
                style={{ color }}
                href="#events"
              >
                Events
              </Text>
              <Text
                className="navbar-item"
                style={{ color }}
                href="#team"
              >
                Team
              </Text>
              <Text
                className="navbar-item"
                style={{ color }}
                href="#contact"
              >
                Contact Us
              </Text>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
