pragma solidity =0.5.16;

import '../ForbitswapERC20.sol';

contract ERC20 is ForbitswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
