pragma solidity ^0.4.24;

import "../token/ShakaCollectible.sol";


contract ShakaCollectibleMock is ShakaCollectible {

  constructor(
    string _name,
    string _symbol
  )
    public
    ShakaCollectible(_name, _symbol)
  {}

  /**
   * @dev Only for test purpose
   */
  function mint(
    address _to,
    uint256 _tokenId
  )
    public
    canMint
    hasMintPermission
  {
    _mint(_to, _tokenId);
  }

  /**
   * @dev Only for test purpose
   */
  function setTokenURI(uint256 _tokenId, string _uri) public {
    super._setTokenURI(_tokenId, _uri);
  }
}
