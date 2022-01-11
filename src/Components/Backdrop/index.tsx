import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    z-index: 100;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

type BackdropProps = {
  onClicked: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClicked }) => {
  return (
    <>
      <Wrapper>
        <motion.div
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClicked}
        >
          {children}
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Backdrop;
