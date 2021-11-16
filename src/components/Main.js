import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Main = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch character API data on load
  useEffect(() => {
    async function fetchChars() {
      try {
        const response = await fetch(
          "https://www.breakingbadapi.com/api/characters"
        );
        const json = await response.json();
        // json.length = 12;
        setCharacters(json.filter((_, index) => index < 12));
        // console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchChars();
  }, []);

  console.log("chars", characters);

  return <MainContainer>Placeholder text</MainContainer>;
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: gray;
`;

export default Main;
