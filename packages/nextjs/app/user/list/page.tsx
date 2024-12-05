import type { NextPage } from "next";
import { Card } from "~~/components/Card";

const UserListPage: NextPage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        margin: "100px auto",
      }}
    >
      <Card title="引換券" issueDate="2024.12.05" amount={7000} expiryDate="2025.06.30" usageScope="店舗全体" />
      <Card title="引換券" issueDate="2024.12.05" amount={7000} expiryDate="2025.06.30" usageScope="店舗全体" />
      <Card title="引換券" issueDate="2024.12.05" amount={7000} expiryDate="2025.06.30" usageScope="店舗全体" />
      <Card title="引換券" issueDate="2024.12.05" amount={7000} expiryDate="2025.06.30" usageScope="店舗全体" />
    </div>
  );
};

export default UserListPage;
