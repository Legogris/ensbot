var SimpleStorage = artifacts.require("./SimpleStorage.sol");
// var Registrar = artifacts.require("./HashRegistrarSimplified.sol");


module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
//  deployer.deploy(Registrar);
};
