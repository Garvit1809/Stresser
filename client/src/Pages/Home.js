import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/NavbarComponents/Navbar";
import Button from "../Components/HomeComponents/Button";
import Footer from "../Components/HomeComponents/Footer";

import img1 from "../assets/HomeAssets/stress1.webp";
import img2 from "../assets/HomeAssets/anxiety-control.webp";
import music from "../assets/HomeAssets/music.webp";
import diet from "../assets/HomeAssets/diet.webp";
import diary from "../assets/HomeAssets/diary.webp";
import chat from "../assets/HomeAssets/chat.webp";

import "@fontsource/abel"

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = styled.div`
  width: 90%;
  height: 45vh;
  box-sizing: border-box;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35vw;
    height: 45vh;
    border-radius: 20px;
    object-fit: cover;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  }

  p {
    width: 45vw;
    height: auto;
    font-size: 1.2rem;
    text-align: center;
    margin-left: 2rem;
    font-family: "Abel", sans-serif;

    span{
      font-weight: 600;
      color: violet;
    }

    span.unmanaged{
      font-size: 1.4rem;
    }

    span.hmm{
      color: black;
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;

const headingAnimate = keyframes`
0%{
  transform: scale(1.1);
}
50%{
  transform: scale(0.9);
}
100%{
  transform: scale(1.1);
}
`

const Causes = styled.div`
  width: 90%;
  height: 45vh;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35vw;
    height: 45vh;
    border-radius: 20px;
    object-fit: cover;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  }

  p {
    width: 45vw;
    height: auto;
    font-size: 1.2rem;
    margin-right: 2rem;
    text-align: center;
    font-family: "Abel", sans-serif;

    h2{
      color: brown;
      animation: ${headingAnimate} ease 2s infinite;
    }
  }

  span.title{
    font-size: 2rem;
    font-weight: 600;
    color: black;
  }

  span{
    color: violet;
    font-weight: 600;
  }

  span.ingredients{
    color: black;
    font-weight: 500;
    text-decoration: underline;
  }
`;

const Cure = styled.div`
  width: 90%;
  height: 71vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const animate = keyframes`
0%{
  transform: scale(1.1);
  margin: 2rem;
}

50%{
  transform: scale(0.9);
  margin: 0.8rem;
}

100%{
  transform: scale(1.1);
  margin: 2rem;
}
`;

const Therapy = styled.div`
  width: 23%;
  height: 100%;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    margin: 1rem 0;
    border-radius: 50%;
    animation: ${animate} 2s ease infinite;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
    text-shadow: 2px 2px white;
  }

  p {
    text-align: center;
    margin: 0 1.3rem;
    text-shadow: 1px 1px white;
  }
`;

const Diet = styled.div`
  width: 23%;
  height: 100%;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    margin: 1rem 0;
    border-radius: 50%;
    animation: ${animate} 2s ease infinite;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
    text-shadow: 2px 2px white;
  }

  p {
    text-align: center;
    margin: 0 1.3rem;
    text-shadow: 1px 1px white;
  }
`;

const Diary = styled.div`
  width: 23%;
  height: 100%;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    margin: 1rem 0;
    border-radius: 50%;
    animation: ${animate} 2s ease infinite;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 600;
    text-shadow: 2px 2px white;
  }

  p {
    text-align: center;
    margin: 0 1.3rem;
    text-shadow: 1px 1px white;
  }
`;

const Chat = styled.div`
  width: 23%;
  height: 100%;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  border-radius: 25px;
  background-color: lightsteelblue;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    margin: 1rem 0;
    border-radius: 50%;
    animation: ${animate} 2s ease infinite;
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 600;
    text-shadow: 2px 2px white;
  }

  p {
    text-align: center;
    margin: 0 1.3rem;
    text-shadow: 1px 1px white;
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <About>
          <img src={img1} alt="aboutStress" />
          <p>
            Most people experience some feelings of stress and anxiety at some point, and that <span className="hmm">isn’t necessarily a “bad” thing</span>. After all, stress and anxiety can sometimes be a helpful motivator to accomplish daunting tasks or do things you’d rather not.
            But <span className="unmanaged">unmanaged</span> stress and anxiety can start to interfere with your daily life and <span>take a toll on your mental and physical health </span>.
          </p>
        </About>
        <Causes>
          <p>
            <span className="title">Stresser</span> is for those who are dealing with stress and anxiety. You can reduce your stress by listening to <span>music</span>, doing <span>yoga</span> and <span>meditation</span> and having a <span>healthy diet</span><span className="ingredients"> including the anxiety reducing ingredients</span>. We provide a <span>diary</span> as well so you can keep track of your mood and a <span>chat</span> section to interact with other stress dealers. <br/>
            <h2>Stresser stresses on reducing people's Stress</h2>
          </p>
          <img src={img2} alt="img" />
        </Causes>
        <Cure>
          <Therapy>
            <img src={music} alt="music" />
            <h1>Music Therapy</h1>
            <p>
              Listening to calm music reduces stress and its symptoms. Yoga and meditation also help in reducing anxiety. Explore our therapy section here 👇👇
            </p>
            <Button text="Therapy" link="/therapy" />
          </Therapy>
          <Diet>
            <img src={diet} alt="diet" />
            <h1>Healthy Diet</h1>
            <p>
            Just as stress can affect nutrition, Nutrition can affect stress. See if you are taking these ingredients that reduce anxiety & search for their recipes 👇👇
            </p>
            <Button text="Diet" link="/diet" />
          </Diet>
          <Diary>
            <img src={diary} alt="diary" />
            <h1>Need a diary</h1>
            <p>
            Journaling is a highly recommended stress-management tool. Journaling can help reduce anxiety, lessen feelings of distress, and increase well-being 👇👇
            </p>
            <Button text="Diary" link="/diary" />
          </Diary>
          <Chat>
            <img src={chat} alt="chat" />
            <h1>Social Activity</h1>
            <p>
            Not only does social support help people feel less stressed, but it also improves health and decrease mortality risk. Interact with others on StressChat 👇👇
            </p>
            <Button text="Chat" link="/chat" />
          </Chat>
        </Cure>
        <Footer />
      </Section>
    </>
  );
};

export default Home;
