"use client";

import React from "react";
import { Box, CardContent, Card as MuiCard, Typography } from "@mui/material";

type CardProps = {
  title: string; // タイトル
  issueDate: string; // 発行日
  amount: number; // 金額
  expiryDate: string; // 有効期限
  usageScope: string; // 使用範囲
};

export const Card = ({ title, issueDate, amount, expiryDate, usageScope }: CardProps) => {
  return (
    <MuiCard
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3, textAlign: "center" }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "right", marginBottom: 2 }}>
          {issueDate} 発行
        </Typography>

        <Box
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            marginBottom: 3,
          }}
        >
          {amount}円
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "text.secondary",
            marginBottom: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            有効期限: {expiryDate}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          使用範囲: {usageScope}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
