import styled from "styled-components";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal onModalClick={props.onGameOverClick} />,
        document.querySelector("#modal-root")
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.querySelector("#overlay-root")
      )}
    </React.Fragment>
  );
};

const Modal = (props) => {
  return (
    <ModalContainer>
      <h1>You won!</h1>
      <p>Click replay to play again with a random selection of characters</p>
      <Button onClick={props.onModalClick}>Replay</Button>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 250px;
  background-color: white;
  border-top: 7px solid #005f73;
  z-index: 100;
  padding: 1rem;

  & h1,
  & p {
    text-align: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  color: #005f73;
  background-color: transparent;
  border: 3px solid #005f73;
  border-radius: 5px;
  transition: 200ms all;

  &:hover {
    color: white;
    background-color: #005f73;
  }
`;

export default Backdrop;
