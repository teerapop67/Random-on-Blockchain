import styled from "styled-components";

export const RandomContainer = styled.div`
  max-width: 450px;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 550px;
  margin-top: 4rem;
  display: flex;
  background: #0b0c17;
  box-shadow: 2px 5px 20px rgba(255, 255, 255, 0.3);
  flex-direction: column;

  .header {
    height: 83px;
    background-color: #222;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  
  }
`;

export const WrapperDetail = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  just-content: center;
  padding: 2rem;

  > img {
    margin: 1rem;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .btnRandom {
    padding: 10px 20px;
    border-color: rgb(37, 77, 167);
    border-width: 10px;
    background-color: #f0650a;
    color: #fff;
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.25rem;
    margin: 2rem 0;
    transition: all 1s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }
  }

  .state {
    font-size: 2rem;
    color: red;
  }

  .fill-out {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    .bet {
      width: 200px;
    }

    .number {
      width: 105px;
      text-align: center;
    }
  }

  .more-detail {
    position: absolute;
    font-size: 16px;
    cursor: pointer;
    right: 20px;
    bottom: 2rem;
  }
`;
