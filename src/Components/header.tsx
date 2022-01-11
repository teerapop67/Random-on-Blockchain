import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact";

const Nav = styled.div`
  background: #0b0c17;
  box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.1);
  height: 80px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
`;

const animateLogo = keyframes`
  0% {opacity: 0}
  50% {transform: rotateZ(5deg)}
  100% {transform: rotateX(5deg)}
`;

const Logo = styled.div`
  cursor: pointer;
  justify-content: start;
  font-weight: 600;
  text-shadow: 10px 3px 10px #f0650a;
  animation: ${animateLogo} 2s alternate infinite;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  background: #f0650a;
  border-width: 20px;
  border: 5px solid #8f929a;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #000;
    color: yellow;
  }
`;

const Header: React.FC<any> = (props) => {
  const [walletNav, setWalletNav] = useState("connect");

  useEffect(() => {
    if (props.wallet === "connect") {
      getCurrentWal();
      //account change
    }

    addWalletListener();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletNav]);

  const getCurrentWal = async () => {
    const currentWall = await getCurrentWalletConnected();
    console.log("address: ", currentWall.address);
    if (currentWall.address !== "connect") {
      let adr = handleWallet(currentWall.address);
      props.setWallet(currentWall.address);
      setWalletNav(adr);
    }
  };

  const connectWalletPressed = async () => {
    const getWall = await connectWallet();
    let adr = handleWallet(getWall.address);
    console.log("CHAING");
    props.setWallet(getWall.address);
    setWalletNav(adr);
  };

  const addWalletListener = async () => {
    const payloads = {
      address: "",
      status: "",
    };
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          payloads.address = accounts[0];
          payloads.status = "👆🏽 Write a message in the text-field above.";
          props.setWallet(payloads.address);
          connectWalletPressed();
        } else {
          payloads.address = "connect";
          payloads.status =
            "🦊 Connect to Metamask using the top right button.";
          props.setWallet(payloads.address);
        }
      });
    } else {
      payloads.address = "connect";
      payloads.status =
        "🦊 You must install Metamask, a virtual Ethereum wallet, in your browser";
      props.setWallet(payloads.address);
    }
  };

  

  const handleWallet = (_wallet: any) => {
    const firstString = _wallet.substring(0, 5);
    const lastString = _wallet.substring(36, 42);
    const completeAddress = firstString + "..." + lastString;
    return completeAddress;
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>
            <h1>RanIron</h1>
          </Logo>
          <NavMenu>
            <NavItem onClick={connectWalletPressed}>{walletNav}</NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Header;
