import styled from "styled-components";

const Scoreboard = (props) => {
  return (
    <ScoreboardContainer>
      <Score>Current Score: {props.current}</Score>
      <Score>High Score: {props.high}</Score>
    </ScoreboardContainer>
  );
};

const ScoreboardContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
`;

const Score = styled.div`
  border: 2px solid black;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
`;

export default Scoreboard;
