import type { NextPage } from "next";
import { CardList } from "~~/components/CardList";

const UserListPage: NextPage = () => {
  const cards = [
    {
      title: "引換券",
      issueDate: "2024.12.05",
      amount: 7000,
      expiryDate: "2025.06.30",
      usageScope: "店舗全体",
    },
    {
      title: "引換券",
      issueDate: "2024.12.05",
      amount: 7000,
      expiryDate: "2025.06.30",
      usageScope: "店舗全体",
    },
    {
      title: "引換券",
      issueDate: "2024.12.05",
      amount: 7000,
      expiryDate: "2025.06.30",
      usageScope: "店舗全体",
    },
    {
      title: "引換券",
      issueDate: "2024.12.05",
      amount: 7000,
      expiryDate: "2025.06.30",
      usageScope: "店舗全体",
    },
  ];

  return <CardList cards={cards} />;
};

export default UserListPage;
