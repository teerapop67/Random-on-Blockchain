import React, { useState } from "react";
import Header from "./Components/header";
import RandomBox from "./Components/randomBox";
import { GlobalStyle } from "./Global.styles";

function App() {
  const [wallet, setWallet] = useState<string>("connect");

  return (
    <div>
      <GlobalStyle />
      <Header wallet={wallet} setWallet={setWallet} />
      <RandomBox wallet={wallet}/>
    </div>
  );
}

export default App;
