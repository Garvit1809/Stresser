import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 10vh;
  margin-top: 1rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  a{
    width: auto;
    height: auto;
    margin-left: 0.4rem;
    text-decoration: none;
    color: brown;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.1);
      color: blueviolet;
    }
}

span.m {
    color: red;
    margin: 0;
    padding: 0;
}

span.l {
    color: blue;
    margin: 0;
}

span.h {
    color: yellow;
    margin: 0;
  }
`;

const Text = styled.div``


const Footer = () => {
  return (
    <Section>
    <Text>
    Made with 💖 for
    <span className="m"> M</span>
    <span className="l">L</span>
    <span className="h">H </span> by 
    <Link to="//garvits-portfolio-on.netlify.app/" target="_blank" >
    Garvit
    </Link>
    </Text>
    </Section>
  );
};

export default Footer;
