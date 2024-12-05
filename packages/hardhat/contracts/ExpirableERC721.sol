// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ExpirableERC721
 * @dev ERC721 Token that can be minted in batches and supports token expiration.
 */
contract ExpirableERC721 is ERC721, Ownable {
    uint256 private _currentTokenId = 0;
    mapping(uint256 => uint256) private _tokenExpirations;

    event TokenMinted(address indexed to, uint256 indexed tokenId, uint256 expirationTime);

    /**
     * @dev Constructor that initializes the ERC721 token with a name, symbol, and sets the initial owner.
     * @param name The name of the token collection.
     * @param symbol The symbol of the token collection.
     * @param initialOwner The address to set as the initial owner.
     */
    constructor(
        string memory name,
        string memory symbol,
        address initialOwner
    ) ERC721(name, symbol) Ownable(initialOwner) {}

    /**
     * @dev Mints multiple tokens to a single address with specified expiration times.
     * @param to The address to mint the tokens to.
     * @param numberOfTokens The number of tokens to mint.
     * @param expirationTimes An array of expiration timestamps for each token.
     */
    function mintBatch(
        address to,
        uint256 numberOfTokens,
        uint256[] memory expirationTimes
    ) external onlyOwner {
        require(numberOfTokens == expirationTimes.length, "Mismatched inputs");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 newTokenId = _currentTokenId;
            _mint(to, newTokenId);
            _tokenExpirations[newTokenId] = expirationTimes[i];
            emit TokenMinted(to, newTokenId, expirationTimes[i]);
            _currentTokenId++;
        }
    }

    /**
     * @dev Returns the expiration time of a specific token.
     * @param tokenId The ID of the token.
     * @return The expiration timestamp.
     */
    function tokenExpiration(uint256 tokenId) external view returns (uint256) {
        require(_ownerOf(tokenId) != address(0), "Nonexistent token");
        return _tokenExpirations[tokenId];
    }

    /**
     * @dev Checks if a token is expired.
     * @param tokenId The ID of the token.
     * @return True if the token is expired, false otherwise.
     */
    function isTokenExpired(uint256 tokenId) public view returns (bool) {
        require(_ownerOf(tokenId) != address(0), "Nonexistent token");
        return block.timestamp >= _tokenExpirations[tokenId];
    }
}
