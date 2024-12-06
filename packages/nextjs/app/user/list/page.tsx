'use client';

import { Button, Typography } from '@mui/material';
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
  

  return (
  <div>
    <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        取得クーポン一覧
      </Typography>
      <CardList cards={cards} />
      <Button
          variant="contained"
          color="error"
          sx={{
            fontWeight: "bold",
            display: "block", // 中央揃えのためにブロック要素に
            margin: "100px auto", // 上下に20pxのマージンを追加、左右は自動で中央揃え
          }}
        >
          クーポンを売る
        </Button>
  </div>) ;
};

export default UserListPage;
