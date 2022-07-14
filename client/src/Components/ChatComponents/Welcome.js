import React from 'react';
import styled from 'styled-components';
import Robot from '../../assets/ChatAssets/robot.gif'

const Container = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: black;
    font-weight: 600;
  }
`

const Welcome = ({ currentUser }) => {
  return (
    <Container>
     <img src={Robot} alt="Robot" />
     <h1>Welcome <span>{currentUser.username}</span></h1>
     <h3>Please select a chat to start a conversation</h3>
    </Container>
  )
}

export default Welcome;