'use client';

import { useScaffoldReadContract } from './useScaffoldReadContract';
import { BigNumber } from 'ethers';

interface Voucher {
  title: string;
  issueDate: BigNumber;
  amount: BigNumber;
  expiryDate: BigNumber;
  usageScope: string;
}

export const useERC721List = ( ownerAddress: string) => {

  // Fetch the list of vouchers owned by the specified address
  const { data: vouchers } = useScaffoldReadContract({
    contractName: "ExpirableERC721",
    functionName: "listVouchers",
    args: [ownerAddress],
  });


  return {
    vouchers: vouchers as Voucher[] | undefined,
  };
};
