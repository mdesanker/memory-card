import styled from "styled-components";

const Scoreboard = (props) => {
  return (
    <ScoreboardContainer>
      <Score>Current Score:</Score>
      <Score>High Score: </Score>
    </ScoreboardContainer>
  );
};

const ScoreboardContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
`;

const Score = styled.div`
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin-top: 0.5rem;
`;

export default Scoreboard;
