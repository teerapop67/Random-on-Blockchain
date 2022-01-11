import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { LoadingIcon } from "../../Global.styles";

const AfterRandom = styled(motion.div)`
  position: fixed;
  z-index: 999;
  width: clamp(100%, auto, 90%);
  height: min(50%, auto);
  margin: auto;
`;

const AfterContainer = styled.div`
  display: flex;
  position: relative;
  background: rgb(37, 77, 167);
  width: 500px;
  padding: 2.5rem;
  border-radius: 8px;
  flex-direction: column;

  .close-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;

    > i {
      font-size: 20px;
    }
  }
`;

const DetailUser = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dotted #fff;
  padding: 1rem;
  gap: 20px;
  box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.1);

  .item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h3 {
      font-size: 16px;
    }

    > p {
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

const dropIn = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

interface Props {
    handleModal: () => void;
    statement: string;
    balance: string;
    sumAward: number;
}

const ModalAfterRandom: React.FC<Props> = (props) => {
  const [theAnswer, setTheAnswer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTheAnswer(true);
    }, 3000);
  }, []);

  return (
    <>
      <Backdrop onClicked={props.handleModal}>
        <AfterRandom
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AfterContainer>
            <div className="close-icon" onClick={props.handleModal}>
              <i className="fas fa-times-circle"></i>
            </div>
            <DetailUser>
              <div className="item">
                <h3>Your balance in wallet</h3>
                <p>{props.balance}</p>
              </div>
              <div className="item">
                <h3>The answer is...</h3>
                {!theAnswer ? (
                  <LoadingIcon>
                    <div className="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </LoadingIcon>
                ) : (
                  <p style={{ color: "#f0650a" }}>{props.statement}</p>
                )}
              </div>
              <div className="item">
                <h3>Total Reward</h3>
                <p>{props.sumAward}</p>
              </div>
            </DetailUser>
          </AfterContainer>
        </AfterRandom>
      </Backdrop>
    </>
  );
};

export default ModalAfterRandom;
