import { ethers } from "ethers";
import React, { useCallback, useState } from "react";
import RandomHaha from "../../contractsABI/RandomHaha.json";
import { RandomContainer, WrapperDetail } from "./random.styles";

const RamdomAddress = "0xF993b845E05889d48d621162f8dE8c4e0b80Bef3";

interface Props {
  setMoreDetail: React.Dispatch<React.SetStateAction<boolean>>;
  wallet: string;
  setStatement: React.Dispatch<React.SetStateAction<string>>;
  setBalance: React.Dispatch<React.SetStateAction<string>>;
  setSumAward: React.Dispatch<React.SetStateAction<number>>;
}

const RandomMode: React.FC<Props> = (props) => {
  const [number, setNumber] = useState<string>("");
  const [bets, setBets] = useState<string>("");
  const [randomClicked, setRandomClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [messageErr, setMessageErr] = useState("");

  const getBalances = useCallback(async () => {
    console.log("ETHER CHECK: ", ethers.utils.parseEther("0.01"));
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        RamdomAddress,
        RandomHaha.abi,
        provider
      );

      console.log("asdasdasd");

      let get = await contract.getBalance();
      console.log(
        "Contract balance: ",
        ethers.utils.formatEther(get.toString())
      );
      //eth
      //0x32Be343B94f860124dC4fEe278FDCBD38C102D88
      //bnb
      //0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
      //const tokenContractAddress = "0x32Be343B94f860124dC4fEe278FDCBD38C102D88";
      // const provider = providers.getDefaultProvider("BSCtestnet");
      const address = "0xcb835BBb48b3a54adfba90C9647fEC2387c38663";

      provider.getBalance(address).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        console.log(`balance: ${balanceInEth} ETH`);

        props.setBalance(balanceInEth.toString());
      });
    }
  }, [props]);

  
  const checkAnswer = () => {
    props.setMoreDetail(true);
    setRandomClicked(false);
    setNumber("");
    setBets("");
  };

  const callRandom = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RamdomAddress,
        RandomHaha.abi,
        signer
      );
      console.log(number);
      if (!number) return;

      try {
        setErrorMessage(false);
        const transaction = await contract.RandomNum(number, {
          value: ethers.utils.parseEther(bets),
        });
        await transaction.wait();

        view();
        getBalances();
        setRandomClicked(true);
      } catch (err: any) {
        setErrorMessage(true);
        setMessageErr("Insufficient funds to allow transfer");
        console.log("Error here: ", err);
      }
    }
  };

  const view = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        RamdomAddress,
        RandomHaha.abi,
        provider
      );

      try {
        const answer = await contract.viewNum();
        console.log("data: ", answer[1].toNumber());
        console.log("answer: ", answer[0]);

        if (answer[0]) {
          props.setStatement("You won");
          props.setSumAward((prv) => (prv += 0.1));
        } else
          props.setStatement(
            `You lost, the answer is : ${answer[1].toNumber()} `
          );
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  return (
    <>
      <RandomContainer>
        <header className="header">
          <h3>Random Number</h3>
        </header>
        <WrapperDetail>
          <img
            src="https://cdn.itech.tools/picture/2021-1-13-1-45-0-715-10632-1.jpg"
            alt="Random"
          />
          {errorMessage && (
            <p style={{ color: "red", margin: "1rem 0" }}>{messageErr}</p>
          )}

          <div className="fill-out">
            <input
              type="text"
              className="bet"
              placeholder="Bet here"
              value={bets}
              onChange={(e) => setBets(e.target.value)}
            />
            <input
              type="text"
              className="number"
              pattern="[0-9]"
              maxLength={2}
              placeholder="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p style={{ color: "rgb(145, 144, 143)" }}>
              you can random only 1-10
            </p>
          </div>

          <div className="btnRandom" onClick={callRandom}>
            Random
          </div>
          {randomClicked && (
            <p className="more-detail" onClick={checkAnswer}>
              Check Answer
            </p>
          )}
        </WrapperDetail>
      </RandomContainer>
    </>
  );
};

export default RandomMode;
