import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/NavbarComponents/Navbar";
import { method1, method2, method3, method4, method5, yoga1, yoga2, yoga3, yoga4, music1, music2, music3, music4, music5, music6, meditate1, meditate2, meditate3, meditate4, meditate5, comedy1, comedy2, comedy3, comedy4, comedy5, comedy6 } from "../Components/TherapyComponents/Frames";

const Section = styled.div`
  width: 100vw;
  min-height: calc(100vh - 4rem);
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Filters = styled.div`
  width: 80%;
  height: 14vh;
  margin: 0 auto;
  margin-top: 0.4rem;

  button {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 1rem 1rem 0 1rem;
    border-radius: 10px;
    background-color: pink;
    box-shadow: 4px 4px black;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

const Videos = styled.div`
  width: 80%;
  padding: 1rem 1rem 1rem 2rem;

  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 0rem;
  row-gap: 1.7rem;
`;

const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    border: 4px solid steelblue;
    border-radius: 10px;
    box-shadow: 8px 8px pink;
  }
`;

const Therapy = () => {

  const musicArr = [music1, music2, music3, music4, music5, music6];
  const yogaArr = [yoga1, yoga2, yoga3, yoga4];
  const meditateArr = [meditate1, meditate2, meditate3, meditate4, meditate5];
  const methodArr = [method1, method2, method3, method4, method5];
  const comedyArr = [comedy1,comedy2,comedy3, comedy4, comedy5,comedy6];
  const all = yogaArr.concat(musicArr, meditateArr, methodArr, comedyArr);

  const [videos, setVideos] = useState(all);

  return (
    <>
      <Navbar />
      <Section>
        <Filters>
          <button onClick={() => setVideos(all)}>All</button>
          <button onClick={() => setVideos(musicArr)}>Music</button>
          <button onClick={() => setVideos(yogaArr)}>Yoga</button>
          <button onClick={() => setVideos(meditateArr)}>Meditate</button>
          <button onClick={() => setVideos(methodArr)}>Methods</button>
          <button onClick={() => setVideos(comedyArr)}>Fun</button>
        </Filters>
        <Videos>
          {videos.map((video, index) => {
            return <Video key={index}>{video}</Video>;
          })}
        </Videos>
      </Section>
    </>
  );
};

export default Therapy;
