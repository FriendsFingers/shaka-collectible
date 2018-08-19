pragma solidity ^0.4.24;

import "./base/ERC721RBACMintableToken.sol";


contract ShakaCollectible is ERC721RBACMintableToken {
  struct TokenStructure {
    bytes6 mainColor;
    bytes6 backgroundColor;
    bytes6 borderColor;
    string message;
  }

  uint256 public progressiveId;

  // Mapping from token ID to the structures
  mapping(uint256 => TokenStructure) structureIndex;

  constructor(
    string _name,
    string _symbol
  )
  public
  ERC721RBACMintableToken(_name, _symbol)
  {}

  function newToken(
    address _beneficiary,
    bytes6 _mainColor,
    bytes6 _backgroundColor,
    bytes6 _borderColor,
    string _message
  )
  public
  returns (uint256)
  {
    uint256 tokenId = progressiveId.add(1);
    _mint(_beneficiary, tokenId);
    structureIndex[tokenId] = TokenStructure(
      _mainColor,
      _backgroundColor,
      _borderColor,
      _message
    );
    progressiveId = tokenId;
    return tokenId;
  }

  function getToken (uint256 tokenId)
  public
  view
  returns (
    address beneficiary,
    bytes6 mainColor,
    bytes6 backgroundColor,
    bytes6 borderColor,
    string message
  )
  {
    require(
      exists(tokenId),
      "Token must exists"
    );

    TokenStructure storage token = structureIndex[tokenId];

    beneficiary = ownerOf(tokenId);
    mainColor = token.mainColor;
    backgroundColor = token.backgroundColor;
    borderColor = token.borderColor;
    message = token.message;
  }

  /**
   * @dev Only contract owner or token owner can burn
   */
  function burn(uint256 tokenId) public {
    address tokenOwner = msg.sender == owner ? ownerOf(tokenId) : msg.sender;
    super._burn(tokenOwner, tokenId);
    delete structureIndex[tokenId];
  }
}
