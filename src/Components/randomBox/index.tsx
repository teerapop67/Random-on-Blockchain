import React, { useState } from "react";
import styled from "styled-components";
import ModalAfterRandom from "../Modal";
import RandomMode from "../random/randomMode";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const RandomBox: React.FC<any> = (props) => {
  const [moreDetail, setMoreDetail] = useState(false);
  const [statement, setStatement] = useState<string>("Answer:...");
  const [balance, setBalance] = useState<string>("0");
  const [sumAward, setSumAward] = useState<number>(0);

  const handleModal = () => {
    setMoreDetail(!moreDetail);
  };
  return (
    <>
      <Section>
        <RandomMode
          wallet={props.wallet}
          setMoreDetail={setMoreDetail}
          setStatement={setStatement}
          setBalance={setBalance}
          setSumAward={setSumAward}
        />
        {moreDetail && (
          <ModalAfterRandom
            handleModal={handleModal}
            statement={statement}
            balance={balance}
            sumAward={sumAward}
          />
        )}
      </Section>
    </>
  );
};

export default RandomBox;
