import React from "react";
import CloseButton from "../../assets/svgs/close_btn.svg";
import Mario from "../../assets/svgs/mario.svg";
import { Container, Info, Box } from "./style";

const Modal = ({ open, setOpen }) => {
  
  return (
    <>
      {open && (
        <Container>
          <Box>
            <img
              src={CloseButton}
              alt="close icon"
              onClick={() => setOpen(false)}
            />
            <Info>
              <div></div>
              <h4>Pedido realizado com sucesso!</h4>
              <div></div>
            </Info>
            <img src={Mario} alt="mario" />
          </Box>
        </Container>
      )}
    </>
  );
};

export default Modal;