import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { io } from "socket.io-client";

import Contacts from "../Components/ChatComponents/Contacts";
import { allUsersRoute, host } from '../Utils/APIRoutes'
import Welcome from "../Components/ChatComponents/Welcome";
import ChatContainer from "../Components/ChatComponents/ChatContainer";
import Navbar from "../Components/NavbarComponents/Navbar";

const Container = styled.div`
  height: calc(100vh - 4rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: steelblue;

  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    };
    @media screen and (min-width: 360px) and (max-width: 480px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

const Chat = () => {

  const socket = useRef();

  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
        setIsLoading(true)
      }
    }
    fetchData();
  },[navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  

  useEffect(() => {
    async function fetchData () {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
          console.log(data.data);
          setContacts(data.data)
        } else {
          navigate("/setAvatar");
        }
      }
    }
    fetchData()
  },[currentUser,navigate]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
    <Navbar/>
    <Container>
    <div className="container">
    <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
    {
      isLoading && currentChat === undefined ? 
      <Welcome currentUser={currentUser} /> :
      <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>
    }
    </div>
    </Container>
    </>
  );
};

export default Chat;
