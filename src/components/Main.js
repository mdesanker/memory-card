import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [content, setContent] = useState();

  // Fetch character API data on load
  useEffect(() => {
    async function fetchChars() {
      try {
        const response = await fetch(
          "https://www.breakingbadapi.com/api/characters"
        );
        const json = await response.json();
        const indices = getRandomIndices(json, 12);
        const selection = indices.map((val) => json[val]);
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
      const num = Math.floor(Math.random() * arr.length + 1);
      if (!randIndices.includes(num)) randIndices.push(num);
    }
    return randIndices;
  };

  useEffect(() => {
    setContent(
      characters.map((char) => {
        return <Card key={char.char_id} info={char} />;
      })
    );
  }, [characters]);

  return <MainContainer>{content}</MainContainer>;
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: gray;
`;

export default Main;
