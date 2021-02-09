import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 500px;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: -500px;
  transform: ${({ nav }) => (nav ? 'translateX(100%)' : 'translateX(0)')};
  transition: all ease-in-out 350ms;

  @media (min-width: 768px) {
    width: 90vw !important;
    left: -90vw;
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
    }
  }
  span.logo {
    position: absolute;
    right: -150px;
    bottom: 110px;
    cursor: pointer;
    transform: rotate(-90deg);
    font-size: 5rem;
  }
`;

const Nav = () => {
  const [nav, showNav] = useState(false);

  return (
    <NavStyles nav={nav}>
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
  );
};

export default Nav;
