pragma solidity ^0.8.0;

contract BigNumbers {
    struct Uint512 {
        uint256 msb;  // Most significant bits
        uint256 lsb;  // Least significant bits
    }
    Uint512 bigNumber;
    function set512Bit(uint256 upper, uint256 lower) public  {
        bigNumber.msb = upper;
        bigNumber.lsb = lower;

    }

    function hashSHA256() public view returns (bytes32) {
        return sha256(abi.encodePacked(bigNumber.msb, bigNumber.lsb));
    }

    function encodePacked() public view returns(bytes memory){
        return abi.encodePacked(bigNumber.msb, bigNumber.lsb);
    }
}
