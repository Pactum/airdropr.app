pragma solidity >=0.4.21 <0.6.0;

import './Airdropper.sol';

contract AirdropperFactory{
    Airdropper[] public deployedAirdroppers;

    function createAirdropper(ERC20 _tokenAddress) public {
        Airdropper newAirdropper = new Airdropper(_tokenAddress);
        deployedAirdroppers.push(newAirdropper);
    }

    function getDeployedAirdroppers() public view returns(Airdropper[] memory) {
        return deployedAirdroppers;
    }
}
