import styled from "styled-components";

const Card = (props) => {
  return (
    <CardContainer img={props.info.img}>
      <Label>{props.info.name}</Label>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 150px;
  height: 200px;
  padding: 0.5rem;
  margin: 1rem;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-image: url(${(props) => (props.img ? props.img : "")});
  background-size: cover;
  background-position: center;

  &:hover {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      ),
      url(${(props) => (props.img ? props.img : "")});
  }
`;

const Label = styled.label`
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default Card;
