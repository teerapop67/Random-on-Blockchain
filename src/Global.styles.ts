import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #272B3F;
    }    
    
    input {
      width: 100%;
      border-color: rgb(37, 77, 167);
      border-width: 10px;
      background: rgb(24, 29, 76);
      color: #8F929A;
      font-size: 1rem;
      line-height: 32px;
      border-radius: 8px;
      padding: 0 1rem;
      font-weight: bold;

      &:focus {
        color: #fff;
      }

    }

    input:focus {
      outline: none;
      border-color: rgba(4,4,5,0.4);
    }

    * { 
        padding: 0;
        margin: 0;
        color: #fff;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;    
    }
`;

export const LoadingIcon = styled.div`
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 10px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
