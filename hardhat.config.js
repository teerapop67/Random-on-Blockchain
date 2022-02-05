require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const mnemonic =
  "merry hurdle cherry sentence outside end nuclear supply ahead feel bracket emotion";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  module.exports = {
//   defaultNetwork: "hardhat",
//   paths: {
//     artifacts: './src/artifacts',
//   },
//   networks: {
//     hardhat: {},
//     ropsten: {
//       url: "https://ropsten.infura.io/v3/2ad8453799b9421c932a7102b41314ca",
//       accounts: [`0x${"589fcdaee74b767434ec08fd1d8bea0ecb7a49a53cc8abfac646f88b7297e0d6"}`]
//     }
//   },
//   solidity: "0.8.4",
// };

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/2ad8453799b9421c932a7102b41314ca",
      accounts: [
        `0x${"589fcdaee74b767434ec08fd1d8bea0ecb7a49a53cc8abfac646f88b7297e0d6"}`,
      ],
    },
    BSCtestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic },
    },
  },
};
