import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  background-image: url(https://res.cloudinary.com/dssa0shmr/image/upload/v1561879682/Pydata/logo2_ekiqfj.png);
  background-size: cover;
  height: 55px;
  width: 125px;
`;

const Navbar = styled.nav`
  padding-top: 1rem;
  margin: 0 auto;
`;

const Text = styled.a`
  font-size: 16px;
`;

const Link = styled.a`
  color: #fff;
`;
const NavbarItemsContainer = styled.div`
  min-width: 900px;
  display: flex;
  margin: 0 auto;
  @media (max-width: 1023px) {
    justify-content: center;
  }
  @media (max-width: 900px) {
    min-width: 300px;
  }
  @media (min-width: 1200px) {
    min-width: 1000px;
  }
  @media (min-width: 1440px) {
    min-width: 1100px;
  }
  @media (min-width: 1680px) {
    min-width: 1200px;
  }
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
        color: "#60469b",
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
      <div className="container" id="home">
        <Navbar
          className="navbar is-fixed-top is-transparent"
          style={{
            backgroundColor,
            color,
            boxShadow,
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            transition: "all 0.2s ease-in-out"
          }}
        >
          <NavbarItemsContainer>
            <div className="navbar-brand">
              <Link style={{ color }} href="/">
                {/* <span className="is-size-3 has-text-weight-bold">PyData</span> */}
                <Logo />
              </Link>

              {/* <div
                class="navbar-burger burger has-background-transparent"
                data-target="navbarExampleTransparentExample"
              >
                <span />
                <span />
                <span />
              </div> */}
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
