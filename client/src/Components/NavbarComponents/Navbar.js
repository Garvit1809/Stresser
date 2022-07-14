import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logout from "./Logout";

import "@fontsource/amita"

const Section = styled.section`
  width: 100vw;
  background-color: #080420;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 4rem;
  margin: 0 auto;
  `;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  font-style: italic;
  padding: 0;
  a{
    color: white;
    text-decoration: none;
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  `;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: whitesmoke;
  transition: all 0.2s ease;
  font-family: "Amita", cursive; 
  letter-spacing: 1.4px;
  font-weight: 800;
  font-style: oblique;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const Navbar = () => {

  return (
    <Section>
      <Nav>
        <Logo>Stresser</Logo>
        <Menu>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/therapy">Therapy</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/diet">Diet</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/diary">Diary</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/chat">Chat</Link>
          </MenuItem>
          <Logout/>
        </Menu>
      </Nav>
    </Section>
  );
};

export default Navbar;
