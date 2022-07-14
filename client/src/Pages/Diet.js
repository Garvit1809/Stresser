import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../Components/NavbarComponents/Navbar";
import RecipeTile from "../Components/DietComponents/RecipeTile";
import DietLists from "../Components/DietComponents/DietLists";

import "@fontsource/alumni-sans"

const Section = styled.div`
  width: 100vw;
  min-height: calc(100vh - 4rem);
  background-color: aliceblue;
  box-sizing: border-box;
  display: flex;
`;

const DietSection = styled.div`
  width: 60%;
  min-height: calc(calc(100vh - 4rem) - 5rem);
  margin: 2rem 1rem 0 3rem;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.88);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.88);


  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 40vw;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    box-shadow: 4px 4px black;

    &:focus {
      outline: none;
    }
  }

  button {
    width: auto;
    height: auto;
    padding: 0.4rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 6px;
    box-shadow: 4px 4px black;
    transition: all 0.2s ease;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  select {
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    box-shadow: 4px 4px black;

    &:focus {
      outline: none;
    }
  }
`;

const Heading = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  color: black;
  padding: 0 2rem;
  margin-bottom: 0.4rem;
  font-family: "Alumni Sans", sans-serif;
  h1{
    font-weight: 400;
  }
`;

const Recipes = styled.div`
  margin-top: 2rem;
  align-items: baseline;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const DietList = styled.div`
  width: 33%;
  height: 60vh;
  border-radius: 20px;
  margin-top: 2rem;
  overflow: auto;

  position: sticky;
  top: 0.5rem;
  right: 1rem;

  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.88);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.88);

  &::-webkit-scrollbar {
      width: 0.5rem;
      &-thumb {
        background-color: #0d0d30;
        width: 0.1rem;
        border-radius: 1rem;
      }
  }

  h2{
    margin: 0.6rem 0 1.5rem 0;
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
    font-family: "Alumni Sans", sans-serif;
  }
`;

const ListItems = styled.div`
  margin-top: 1rem;
  width: 80%;
  margin: 0 auto;
`;

const Diet = () => {
  const healthLabels = [
    "Alcohol-Free",
    "Celery-Free",
    "Dairy-Free",
    "Egg-Free",
    "Gluten-Free",
    "Pork-Free",
    "Sugar-Conscious",
    "Vegan",
    "Vegetarian",
    "Wheat-Free",
  ];
  const magnesium = ["Spinach","Swiss Chard","Pumpkin Seeds","Soumilk","Edamame","Peanut Butter","Kidney Beans","Legumes", "Nuts", "Seeds", "Whole grains"];
  const zinc = ["Oysters","Cashews","Liver","Beef","Egg yolks"];
  const probiotic = ["Pickles","Sauerkraut","Kefir"];
  const vitB = ["Avocado", "Almonds"];
  const antioxidants = [
    {
      heading: 'Beans',
      list: ["Dried Small Red", "Pinto", "Black Beans", "Red Kidney"]
    },
    {
      heading: 'Fruits',
      list:  ["Apples","Prunes","Plums","Sweet Cherries","Black Plums"]
    },
    {
      heading: 'Berries',
      list: ["Blackberries", "Strawberries", "Cranberries", "Blueberries", "Raspberries"]
    },
    {
      heading: 'Nuts',
      list:  ["Walnuts", "Pecans"]
    },
    {
      heading: 'Vegetables',
      list: ["Artichokes", "Kale", "Spinach", "Beets", "Broccoli"]
    }
  ]

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7824b40a&app_key=5ff407054c6483184049da6dac20c343&dishType=Main%20course&calories=100-2000&imageSize=REGULAR&random=true&health=${healthLabel}`;

  async function getRecipes() {
    var result = await axios.get(URL);
    console.log(result.data.hits);
    setRecipes(result.data.hits);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const lowerLabel = (label) => {
    const outputLabel = label.toLowerCase();
    return outputLabel;
  };

  return (
    <>
      <Navbar />
      <Section>
        <DietSection>
          <Heading>
            <h1>Search for Recipes 🥣</h1>
          </Heading>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Ingredient"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select>
              {healthLabels.map((label, index) => {
                return (
                  <option
                    key={index}
                    onClick={() => setHealthLabel(lowerLabel(label))}
                  >
                    {label}
                  </option>
                );
              })}
            </select>
            <button>Search</button>
          </form>
          <Recipes>
            {recipes.map((recipe, index) => {
              return <RecipeTile key={index} recipe={recipe} />;
            })}
          </Recipes>
        </DietSection>
        <DietList>
          <h2>Ingredients to reduce anxiety 🍈🥑</h2>
          <ListItems>
            <ol>
              <DietLists subheading="Magnesium Rich" list={magnesium} />
              <DietLists subheading="Zinc rich" list={zinc} />
              <DietLists subheading="Pro-biotic foods" list={probiotic} />
              <DietLists subheading="Vitamins-B" list={vitB} />
              <DietLists subheading="Antioxidants rich" list={
                antioxidants.map((item,index) => (
                  <DietLists key={index} subheading={item.heading} list={item.list} />
              ))
              } />

            </ol>
          </ListItems>
        </DietList>
      </Section>
    </>
  );
};

export default Diet;
