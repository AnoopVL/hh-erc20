const { getNamedAccounts, ethers } = require("hardhat")

async function getWeth() {
  const { deployer } = await getNamedAccounts
  //mainnet weth contract address : 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2

  const iweth = await ethers.getContractAt(
    "Iweth",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    deployer
  )
  const tx = await iweth.deposit({ value: amount })
  await tx.wait(1)
  const wethBalance = await iweth.balanceOf(deployer)
  console.log(`Weth balance is  ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth }
