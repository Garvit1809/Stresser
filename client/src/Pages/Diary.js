import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Components/NavbarComponents/Navbar";
import DiaryEntry from "../Components/DiaryComponents/DiaryEntry";
import { postDiaryEntryRoute, getAllEntriesRoute } from "../Utils/APIRoutes";
import griningFace from "../assets/DiaryAssets/GriningFace.png";
import excitedFace from "../assets/DiaryAssets/ExcitedFace.png";
import sadFace from "../assets/DiaryAssets/SadFace.png";


const Section = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SubSection = styled.div`
  box-sizing: border-box;
  width: 45%;
  height: calc(calc(100vh - 4rem) - 10vh);
  background-color: #9a86f3;
  margin: 1.5rem;
  padding: 1.4rem;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin: 1rem;
    height: 2rem;
    width: 10rem;
    border-radius: 5px;
    border: none;
    padding: 0.8rem;
    font-size: 1rem;
    box-shadow: 4px 4px #131324;

    &:focus {
      outline: none;
    }
  }

  textarea {
    margin: 1rem;
    border-radius: 5px;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    box-shadow: 8px 8px black;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;

const SecondSection = styled.div`
  box-sizing: border-box;
  width: 45%;
  height: calc(calc(100vh - 4rem) - 10vh);
  background-color: #9a86f3;
  margin: 1.5rem;
  border-radius: 25px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 1rem;
    &-thumb {
      background-color: #0d0d30;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  padding: 2rem;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 400;
  }

  div {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    font-size: 2rem;
  }

  img {
    cursor: pointer;
    transition: all 2s ease;

    &:hover {
      transform: rotate(720deg) scale(1.1);
    }
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  background-color: white;
  padding: 0.4rem;
  border-radius: 6px;
  margin: 0 0 0 1.2rem;
  box-shadow: 4px 4px black;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
  
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`;


const Diary = () => {
  const [diaryEntry, setDiaryEntry] = useState({
    title: "",
    day: "",
    body: "",
  });
  const [entries, setEntries] = useState([]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setDiaryEntry({ ...diaryEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const { title, day, body } = diaryEntry;
    if (title === "") {
      toast.error("Title is empty", toastOptions);
      e.preventDefault();
    }
    if (body === "") {
      toast.error("You should write about today's experience", toastOptions);
      e.preventDefault();
    }
    async function postData() {
      console.log(diaryEntry);
      const user = await JSON.parse(localStorage.getItem("chat-app-user"));
      await axios.post(postDiaryEntryRoute, {
        userId: user._id,
        title,
        day,
        body,
      });
    }
    postData();
    setDiaryEntry({
      title: "",
      day: "",
      body: "",
    });
  };

  useEffect(() => {
    async function fetchData() {
      const user = await JSON.parse(localStorage.getItem("chat-app-user"));
      const data = await axios.get(`${getAllEntriesRoute}/${user._id}`);
      console.log(data.data);
      setEntries(data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Section>
        <SubSection>
          <form onSubmit={handleSubmit}>
            <Heading>
              <h1>How's your mood today</h1>
              <img src={excitedFace} alt="smilingFace" />
              <img src={griningFace} alt="griningFace" />
              <img src={sadFace} alt="smilingFace" />
            </Heading>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={diaryEntry.title}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="date"
                name="day"
                value={diaryEntry.day}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <textarea
                name="body"
                cols="45"
                rows="10"
                value={diaryEntry.body}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Button>
              <button type="submit">Add to Diary</button>
            </Button>
          </form>
        </SubSection>

        <SecondSection>
          {entries.map((entry, index) => {
            return (
             <DiaryEntry key={index} entry={entry} />
            );
          })}
        </SecondSection>
      </Section>
      <ToastContainer />
    </>
  );
};

export default Diary;
