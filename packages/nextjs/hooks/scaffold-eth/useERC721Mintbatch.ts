import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

/**
 * Custom hook to interact with the mintBatch function of the ExpirableERC721 contract.
 */
export const useERC721MintBatch = () => {
  const [isMinting, setIsMinting] = useState(false);
  const { writeContractAsync } = useScaffoldWriteContract("ExpirableERC721");

  /**
   * Function to mint a batch of ERC721 tokens.
   * @param to Address to mint the tokens to.
   * @param numberOfTokens Number of tokens to mint.
   * @param title Title of the voucher.
   * @param issueDate Issue date of the voucher.
   * @param amount Amount associated with the voucher.
   * @param expiryDate Expiry date of the voucher.
   * @param usageScope Usage scope of the voucher.
   */
  const mintBatch = async (
    to: string,
    numberOfTokens: bigint,
    title: string,
    issueDate: bigint,
    amount: bigint,
    expiryDate: bigint,
    usageScope: string
  ) => {
    setIsMinting(true);
    try {
      await writeContractAsync({
        functionName: "mintBatch",
        args: [to, numberOfTokens, title, issueDate, amount, expiryDate, usageScope],
      });
    } catch (error) {
      console.error("Error minting batch:", error);
    } finally {
      setIsMinting(false);
    }
  };

  return { mintBatch, isMinting };
};
