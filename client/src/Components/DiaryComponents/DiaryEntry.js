import React, { useState } from "react";
import styled from "styled-components";
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Container = styled.div``;

const Entries = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    border: 1px solid;
    border-radius: 40%;
    background-color: black;
    fill: white;
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

const DiaryEntryy = styled.div`
  width: 50vw;
  height: 60vh;
  display: ${(props) => (props.clicked ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink;
  color: white;
  border-radius: 10px;

  div.svg {
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      background-color: black;
      fill: white;
      border-radius: 6px;
      margin: 0.2rem 0.2rem 0 0;
    }
  }

  div.title {
    margin-top: 1rem;
    padding: 1rem 1rem 1rem 4rem;
    display: flex;
    gap: 14rem;

    div.entry {
      border-radius: 10px;
      padding: 0.4rem 0.6rem;
      background-color: steelblue;
      width: auto;
    }
  }

  div.body {
    margin-top: 1rem;
    height: 30vh;
    padding: 0rem 4rem;

    div.entry {
      height: 100%;
      font-size: 1.5rem;
      overflow: auto;
      padding: 1rem 0.5rem;
      background-color: steelblue;
      border-radius: 20px;

      &::-webkit-scrollbar {
        width: 0.6rem;
        &-thumb {
          background-color: #0d0d30;
          width: 0.1rem;
          border-radius: 1rem;
        }
      }
    }
  }
`;

const DiaryEntry = ({ entry }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    console.log(collapse);
    setCollapse(!collapse);
  };

  return (
    <Container>
      <Entries>
        <h2>{entry.title}</h2>
        <div>
          <h3>{entry.day}</h3>
          <ReadMoreRoundedIcon onClick={() => handleCollapse()} />
        </div>
      </Entries>
      <DiaryEntryy clicked={collapse}>
        <div className="svg">
          <CloseRoundedIcon onClick={() => handleCollapse()} />
        </div>
        <div className="title">
          <div className="entry">
            <h1>{entry.title}</h1>
          </div>
          <div className="entry">
            <h1>{entry.day}</h1>
          </div>
        </div>
        <div className="body">
          <div className="entry">{entry.body}</div>
        </div>
      </DiaryEntryy>
    </Container>
  );
};

export default DiaryEntry;
