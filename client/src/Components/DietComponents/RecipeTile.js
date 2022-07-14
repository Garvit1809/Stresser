import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 45%;
  height: auto;
  text-align: center;
  /* background-color: lightcoral; */
  background-color: pink;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  border: 2px solid burlywood;
  border-radius: 25px;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 10px 10px cadetblue;

  div {
    height: 5vh;
    /* border: 1px solid black; */
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-top: 0.5rem;
    border-radius: 25px;
    transition: all 0.2s ease;
    /* border: 2px solid lightblue; */
    box-shadow: 4px 4px cadetblue;

    &:hover {
      transform: scale(1.1);
      margin-top: 0.7rem;
      cursor: pointer;
    }
  }
`;

const RecipeTile = ({ recipe }) => {
  const sliceUrl = (url) => {
    if (url.startsWith("http:")) {
      url = url.slice(5);
      return url;
    } else {
      url = url.slice(6);
      return url;
    }
  };

  return (
    recipe["recipe"]["image"] != null && (
      <Section>
        <div>
          <p>{recipe["recipe"]["label"]}</p>
        </div>
        <Link to={sliceUrl(recipe["recipe"]["url"])} target="_blank">
          <img src={recipe["recipe"]["image"]} alt="foodImg" />
        </Link>
      </Section>
    )
  );
};

export default RecipeTile;
