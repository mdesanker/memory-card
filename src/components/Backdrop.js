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
        <Overlay onClick={props.onGameOverClick} />,
        document.querySelector("#overlay-root")
      )}
    </React.Fragment>
  );
};

const Modal = (props) => {
  return (
    <ModalContainer>
      <h1>You won!</h1>
      <button onClick={props.onModalClick}>Replay</button>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: 200px;
  background-color: white;
  border-top: 5px solid #2a9d8f;
  z-index: 100;
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

export default Backdrop;
