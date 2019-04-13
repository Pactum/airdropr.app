pragma solidity >=0.4.21 <0.6.0;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Airdropper is Ownable {
    using SafeMath for uint256;

    ERC20 public token;
    uint256 public amountAirdropped; // Cumulative amount of tokens airdropped

    event AirDrop(address indexed _beneficiaryAddress, uint256 _amount);

    modifier validAddressAmount(address _beneficiaryWallet, uint256 _amount) {
        require(_beneficiaryWallet != address(0));
        require(_amount != 0);
        _;
    }

    modifier ifTokensAvailable(uint256 _amount) {
        // assert(token.balanceOf(this) >= _amount); old version
        assert(token.balanceOf(msg.sender) >= _amount);
        _;
    }

    constructor(ERC20 _token) public {
        // require(_token != address(0)); old version
        require(address(_token) != address(0));
        token = _token;
    }

    /**
    * @dev This function is the batch send function for Token distribution. It accepts an array of addresses and amounts
    * @param _beneficiaryWallets the address where tokens will be deposited into
    * @param _amounts the token amount in wei to send to the associated beneficiary
    */
    function batchAirdropTokens(address[] calldata _beneficiaryWallets, uint256[] calldata _amounts) external onlyOwner  {
        require(_beneficiaryWallets.length == _amounts.length);
        for (uint i = 0; i < _beneficiaryWallets.length; i++) {
            airdropTokens(_beneficiaryWallets[i], _amounts[i]);
        }
    }

    /**
    * @dev Single airdrop function. It is for a single transfer of tokens to beneficiary
    * @param _beneficiaryWallet the address where tokens will be deposited into
    * @param _amount the token amount in wei to send to the associated beneficiary
    */
    function airdropTokens(
        address _beneficiaryWallet,
        uint256 _amount)
        public onlyOwner ifTokensAvailable(_amount) validAddressAmount(_beneficiaryWallet, _amount)
        {
        amountAirdropped = amountAirdropped.add(_amount);
        token.transfer(_beneficiaryWallet, _amount);
        emit AirDrop(_beneficiaryWallet, _amount);
    }
}
