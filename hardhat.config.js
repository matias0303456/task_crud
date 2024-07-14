require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
// const { task } = require("hardhat/config");
const taskDeploymentInfo = require("./ignition/deployments/chain-31337/artifacts/TaskModule4#Task.json")

const abi = taskDeploymentInfo.abi;
const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

task('get-tasks', 'Get all tasks.').setAction(async (_, { ethers }) => {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(address, abi, wallet);
  const tasks = await contract.getTasks();
  console.log(tasks)
})

task('get-task-by-index', 'Get one task.')
  .addParam('index', "Task's id")
  .setAction(async (args, { ethers }) => {
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    const wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(address, abi, wallet);
    const { index } = args;
    const task = await contract.getTaskByIndex(index);
    console.log(task)
  })
  ;

task('add-task', 'Add task.',).setAction(async (_, { ethers }) => {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(address, abi, wallet);
  await contract.addTask('esta es una prueba');
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};
