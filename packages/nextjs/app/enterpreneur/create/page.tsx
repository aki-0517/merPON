"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../form/card";
import { SelectTab } from "../form/selectTab";
import { SwitchField } from "../form/switchField";
import { Box, Tab, Tabs } from "@mui/material";
import { Typography } from "@mui/material";

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

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        クーポンの登録
      </Typography>
      <SelectTab value={value} handleChange={handleChange} />
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Card {...content} />
        <SwitchField value={value} />
      </Box>
    </div>
  );
}
