// eslint-disable-next-line no-undef
const Decentragram = artifacts.require("Decentragram");

module.exports = function(deployer) {
  // Code goes here...
  deployer.deploy(Decentragram);
};