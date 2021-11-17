import styled from "styled-components";

const Card = (props) => {
  return (
    <CardContainer img={props.info.img ? props.info.img : ""}>
      <Label>{props.info.name}</Label>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 180px;
  height: 210px;
  margin: 10px;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-image: url(${(props) => (props.img ? props.img : "")});
  background-size: cover;
  background-position: top;

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
  margin: 0.5rem 0.5rem 0;
  color: white;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Card;
