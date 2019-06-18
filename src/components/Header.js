import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: transparent;
  padding-top: 1rem;
`;

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
          className="navbar is-fixed-top"
          style={{
            backgroundColor,
            color,
            boxShadow,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem"
          }}
        >
          <div className="navbar-brand">
            <span className="is-size-3 has-text-weight-bold">PyData</span>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <a
                className="navbar-item"
                style={{ color, fontSize: "15px" }}
                href="#home"
              >
                Home
              </a>
              <a
                className="navbar-item"
                style={{ color, fontSize: "15px" }}
                href="#about"
              >
                About Us
              </a>
              <a
                className="navbar-item"
                style={{ color, fontSize: "15px" }}
                href="#events"
              >
                Events
              </a>
              <a
                className="navbar-item"
                style={{ color, fontSize: "15px" }}
                href="#team"
              >
                Team
              </a>
              <a
                className="navbar-item"
                style={{ color, fontSize: "15px" }}
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
