import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  padding-top: 1rem;
  margin: 0 auto;
`;

const Text = styled.a`
  font-size: 15px;
`;

const Link = styled.a`
  color: #fff;
`;
const NavbarItemsContainer = styled.div`
  min-width: 900px;
  display: flex;
  margin: 0 auto;
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
      <div class="container-fluid" id="home">
        <Navbar
          className="navbar is-fixed-top is-transparent"
          style={{
            backgroundColor,
            color,
            boxShadow,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <NavbarItemsContainer>
            <div className="navbar-brand">
              <Link style={{ color }} href="./Hero.js">
                <span className="is-size-3 has-text-weight-bold">PyData</span>
              </Link>
            </div>
            <div
              id="navbarExampleTransparentExample"
              className="navbar-menu"
              style={{ float: "right" }}
            >
              <div className="navbar-end">
                <Text className="navbar-item" style={{ color }} href="#home">
                  Home
                </Text>
                <Text className="navbar-item" style={{ color }} href="#about">
                  About Us
                </Text>
                <Text className="navbar-item" style={{ color }} href="#events">
                  Events
                </Text>
                <Text className="navbar-item" style={{ color }} href="#team">
                  Team
                </Text>
                <Text className="navbar-item" style={{ color }} href="#contact">
                  Contact Us
                </Text>
              </div>
            </div>
          </NavbarItemsContainer>
        </Navbar>
      </div>
    );
  }
}
