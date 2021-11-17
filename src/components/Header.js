import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        {/* <Element>
          <h2>90</h2>
          <h1>Th</h1>
          <p>Thalium</p>
        </Element>
        <Letters>e&nbsp;&nbsp;</Letters> */}
        <Letters>Me</Letters>
        <Element>
          <h2>42</h2>
          <h1>Mo</h1>
          <p>Molybdenum</p>
        </Element>
        <Letters>ry&nbsp;&nbsp;&nbsp;</Letters>
        <Element>
          <h2>31</h2>
          <h1>Ga</h1>
          <p>Gallium</p>
        </Element>
        <Letters>me</Letters>
      </Title>
    </HeaderContainer>
  );
};

const Letters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 6rem;
  text-align: center;
  padding: 0rem 0.2rem 0.6rem;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid white;
  width: 4rem;
  height: 5rem;
  text-align: center;

  & h1 {
    font-size: 2rem;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  & h2 {
    font-size: 1rem;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  & p {
    font-size: 0.6rem;
    font-weight: 100;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

const Title = styled.h1`
  display: flex;
  // flex-direction: row;
  // align-items: center;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 5rem;
  color: white;
  background-color: #264653;
`;

export default Header;
