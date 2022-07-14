import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi'

const Button = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }

  &:hover{
    transform: scale(1.1);
}

&:active{
    transform: scale(0.9);
  }
`;

const Logout = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate("/login")
    }

  return (
    <Button onClick={handleClick} >
    <BiPowerOff/>
    </Button>
  )
}

export default Logout