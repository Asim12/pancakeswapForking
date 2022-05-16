const WETH = artifacts.require("WETH.sol");
const Router = artifacts.require('PancakeRouter01.sol');

module.exports = async function (deployer, network) {
        let weth;
        const FACTORY_ADDRESS = '0xB6fcB7E9D60f9018Af1d6aCB3b2Cd410a0A852B3';
        if(network == 'mainnet'){
                weth = await.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
         
        }else{
                await deloper.deploy(WETH);
                weth = await WETH.deployed();
        }

        await deployer.deploy(Router, Factory_address, weth.address);
};


