const hre = require("hardhat");
const ethers = hre.ethers;
const contractAddress = "0xE12ac06765797e9A6Fa829527389e4420FDE4c35";


async function transfer() {
  const provider = ethers.provider;
  const signer = provider.getSigner();
  const tx = signer.sendTransaction({
    to: contractAddress,
    value: ethers.utils.parseEther("0.2"),
  });
}

transfer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
