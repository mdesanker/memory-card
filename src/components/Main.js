import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./game/Cards";
import Scoreboard from "./game/Scoreboard";
import Backdrop from "./Backdrop";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isWon, setIsWon] = useState(false);

  async function fetchChars() {
    try {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );
      const json = await response.json();
      // Filter out Holly White - no img in API
      const chars = json.filter((_, index) => index !== 38);
      // Downselect to 12 random characters
      const indices = getRandomIndices(chars, 12);
      const selection = indices.map((val) => chars[val]);
      setCharacters(selection);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Fetch character API data on load
  useEffect(() => {
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

  // Handle clicks on card components
  const clickHandler = (e) => {
    const { id } = e.target;
    // Handle correct guess
    if (!guesses.includes(id)) {
      setGuesses((prevState) => [...prevState, id]);
      setCurrentScore((prevState) => prevState + 1);

      //Handle incorrect guess
    } else {
      setCurrentScore(0);
      setGuesses([]);
    }
    // if (guesses.length === 4) setIsWon(true);
    setCharacters(shuffleArray(characters));
  };

  useEffect(() => {
    if (guesses.length >= 4) setIsWon(true);
  }, [guesses]);

  // Set high score
  useEffect(() => {
    currentScore > highScore && setHighScore(currentScore);
  }, [currentScore, highScore]);

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

  const gameOverClickHandler = () => {
    setIsWon(false);
    setCharacters([]);
    fetchChars();
    setCurrentScore(0);
    setGuesses([]);
  };

  return (
    <MainContainer>
      <Scoreboard current={currentScore} high={highScore} />
      <Cards charList={characters} onClickHandler={clickHandler} />
      {isWon && <Backdrop onGameOverClick={gameOverClickHandler} />}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Main;
