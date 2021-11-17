import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./game/Cards";
import CardWrapper from "./game/CardWrapper";
import Scoreboard from "./game/Scoreboard";
import uniqid from "uniqid";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [content, setContent] = useState();
  const [guesses, setGuesses] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Fetch character API data on load
  useEffect(() => {
    async function fetchChars() {
      try {
        const response = await fetch(
          "https://www.breakingbadapi.com/api/characters"
        );
        const json = await response.json();
        const chars = json.filter((_, index) => index !== 38);
        // console.log(characters);

        // // Downselect to 12 random characters
        const indices = getRandomIndices(chars, 12);
        const selection = indices.map((val) => chars[val]);
        setCharacters(selection);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchChars();
  }, []);

  const getRandomIndices = (arr, numEl) => {
    const randIndices = [];
    while (randIndices.length < numEl) {
      const num = Math.floor(Math.random() * arr.length);
      if (!randIndices.includes(num)) randIndices.push(num);
    }
    return randIndices;
  };

  const shuffleArray = (arr) => {
    const newArr = [];
    const indices = [];
    while (newArr.length !== arr.length) {
      const index = Math.floor(Math.random() * arr.length);
      if (!indices.includes(index)) {
        indices.push(index);
        newArr.push(arr[index]);
      }
    }
    return newArr;
  };

  // Handle clicks on card components
  const clickHandler = (e) => {
    const { id } = e.target;
    if (guesses.includes(id)) return;
    console.log("id", id);
    setGuesses((prevState) => [...prevState, id]);
    setCurrentScore((prevState) => prevState + 1);
    console.log(guesses);
  };

  // Set high score
  useEffect(() => {
    currentScore > highScore && setHighScore(currentScore);
  }, [currentScore, highScore]);

  return (
    <MainContainer>
      <Scoreboard current={currentScore} high={highScore} />
      <Cards charList={characters} onClickHandler={clickHandler} />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: gray;
  height: 100%;
`;

export default Main;
