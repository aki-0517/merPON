'use client';

import type { NextPage } from 'next';
import { useAccount } from 'wagmi';
import { CardList } from '~~/components/CardList';
import { useERC721List } from '~~/hooks/scaffold-eth/useERC721List';

const UserListPage: NextPage = () => {
  const { address } = useAccount();
  const { vouchers } = useERC721List(address || '');

  const cards = vouchers?.map((voucher) => {
    const amount = voucher.amount;
    return {
      title: voucher.title,
      issueDate: voucher.issueDate.toString(),
      amount: Number(amount),
      expiryDate: voucher.expiryDate.toString(),
      usageScope: voucher.usageScope,
    };
  }) || [];
  

  return <CardList cards={cards} />;
};

export default UserListPage;
