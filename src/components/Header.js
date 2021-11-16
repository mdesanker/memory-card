import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Memory Game</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
`;

export default Header;
