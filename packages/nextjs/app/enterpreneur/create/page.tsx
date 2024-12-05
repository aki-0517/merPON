"use client";

import { useState } from "react";
import { useEffect } from "react";
import { SelectTab } from "../form/selectTab";
import { SwitchField } from "../form/switchField";
import { Box, Tab, Tabs } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "~~/components/Card";
import { CardList } from "~~/components/CardList";
import DividerWithText from "~~/components/DividerWithText";

// タブの種類を表すユニオン型を定義
type TabType = "割引券" | "引換券" | "会員券";

const content = {
  title: "割引券", // タイトル
  issueDate: "12/6", // 発行日
  amount: 5000, // 金額
  expiryDate: "12/5 ~ 12/6", // 有効期限
  usageScope: "商用化", // 使用範囲
};

export default function TicketTabs() {
  const [value, setValue] = useState<TabType>("割引券");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const tabLabels: TabType[] = ["割引券", "引換券", "会員券"];
    setValue(tabLabels[newValue]);
  };

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

  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        クーポンの登録
      </Typography>
      <SelectTab value={value} handleChange={handleChange} />
      <Box sx={{ display: "flex", gap: 4, justifyContent: "center", mb: 5, pb: 3 }}>
        <Card {...content} />
        <SwitchField value={value} />
      </Box>
      <DividerWithText />
      <CardList cards={cards} />
    </div>
  );
}
