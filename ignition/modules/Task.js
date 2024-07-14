const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TaskModule4", (m) => {
    const task = m.contract("Task");
    return { task };
});
