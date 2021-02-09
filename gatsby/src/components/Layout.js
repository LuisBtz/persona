import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.main`
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: 0;
  top: 0;
  left: ${({ nav }) => (nav ? '500px' : '0')};
  transition: left ease-in-out 350ms;
  padding-left: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    left: ${({ nav }) => (nav ? '250px' : '0')};
    padding-left: 50px;
  }
`;

const NavStyles = styled.nav`
  width: 500px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: -500px;
  border-right: solid 1px black;
  transform: ${({ nav }) => (nav ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform ease-in-out 350ms;
  @media (max-width: 768px) {
    width: 250px;
    left: -250px;
  }
  ul {
    margin-top: 20px;
    margin-left: 20px;
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 15px;
    }
    a {
      font-size: 5rem;
      &:hover {
        text-decoration: underline;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }
  }
  span.logo {
    position: absolute;
    right: -132px;
    bottom: 95px;
    cursor: pointer;
    transform: rotate(-90deg);
    font-size: 3.8rem;
    @media (max-width: 768px) {
      font-size: 2.8rem;
      right: -65px;
      bottom: 50px;
    }
  }
  .cerrar {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 10px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
    .linea {
      width: 100%;
      height: 1px;
      margin-bottom: 20px;
      background-color: black;
      position: absolute;
      top: 50%;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Layout = ({ children }) => {
  const [nav, showNav] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <NavStyles nav={nav}>
        <div className="cerrar" onClick={() => showNav(!nav)}>
          <div className="linea" />
          <div className="linea" />
        </div>
        <ul>
          <li>
            <Link to="/" className="logo" onClick={() => showNav(!nav)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="logo" onClick={() => showNav(!nav)}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pastResidents"
              className="logo"
              onClick={() => showNav(!nav)}
            >
              Past Residents
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="logo" onClick={() => showNav(!nav)}>
              Upcoming
            </Link>
          </li>
          <li>
            <Link to="/contact" className="logo" onClick={() => showNav(!nav)}>
              Contact
            </Link>
          </li>
        </ul>
        <span className="logo" onClick={() => showNav(!nav)}>
          Persona
        </span>
      </NavStyles>
      <div className="cursor" />
      <ContentStyles nav={nav}>{children}</ContentStyles>
    </>
  );
};

export default Layout;
