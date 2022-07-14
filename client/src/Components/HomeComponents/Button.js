import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import "@fontsource/amita"

const Section = styled.button`
width: auto;
height: auto;
padding:  0 0.4rem;
border-radius: 6px;
margin-top: 0.3rem;
background-color: white;
color: black;

box-shadow: 4px 4px black;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  button{
    background-color: inherit;
    border: none;
    padding: 0.4rem 0.2rem;
    font-weight: 600;
    font-style: italic;
    cursor: pointer;
}
`

const Button = ({ text, link }) => {
  return (
    <Section>
    <Link to={link} >
    <button>{text} &gt;&gt;</button>
    </Link>
    </Section>
  )
}

export default Button