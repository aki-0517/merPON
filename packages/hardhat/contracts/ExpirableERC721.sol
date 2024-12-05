// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ExpirableERC721
 * @dev ERC721 Token that can be minted in batches and supports token expiration.
 */
contract ExpirableERC721 is ERC721Enumerable, Ownable {
    uint256 private _currentTokenId = 0;
    mapping(uint256 => uint256) private _tokenExpirations;

    /**
     * @dev Struct to store the schema information for each token.
     */
    struct Voucher {
        string title;
        uint256 issueDate;
        uint256 amount;
        uint256 expiryDate;
        string usageScope;
    }

    // Mapping from token ID to Voucher details
    mapping(uint256 => Voucher) private _tokenVouchers;

    /**
     * @dev Emitted when a token is minted.
     */
    event TokenMinted(
        address indexed to,
        uint256 indexed tokenId,
        string title,
        uint256 issueDate,
        uint256 amount,
        uint256 expiryDate,
        string usageScope
    );

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

    function mintBatch(
        address to,
        uint256 numberOfTokens,
        string memory title,
        uint256 issueDate,
        uint256 amount,
        uint256 expiryDate,
        string memory usageScope
    ) external {
        require(to != address(0), "Cannot mint to zero address");
        require(numberOfTokens > 0, "Must mint at least one token");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 newTokenId = _currentTokenId;
            _mint(to, newTokenId);

            // Assign the schema data to the newly minted token
            _tokenVouchers[newTokenId] = Voucher({
                title: title,
                issueDate: issueDate,
                amount: amount,
                expiryDate: expiryDate,
                usageScope: usageScope
            });

            emit TokenMinted(
                to,
                newTokenId,
                title,
                issueDate,
                amount,
                expiryDate,
                usageScope
            );

            _currentTokenId++;
        }
    }

    /**
     * @dev Returns a list of Voucher structs owned by a specific address.
     * @param owner The address to query vouchers for.
     * @return An array containing the Voucher structs owned by the address.
     *
     * @notice Be cautious when calling this function with a large number of tokens,
     * as it may consume a lot of memory and exceed block gas limits.
     */
    function listVouchers(address owner) external view returns (Voucher[] memory) {
        uint256 balance = balanceOf(owner);
        Voucher[] memory vouchers = new Voucher[](balance);
        
        for (uint256 i = 0; i < balance; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(owner, i);
            vouchers[i] = _tokenVouchers[tokenId];
        }
        return vouchers;
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
