"use client";

import React from "react";
import { Box, CardContent, Divider, Card as MuiCard, Typography } from "@mui/material";

type CardProps = {
  title: string; // タイトル
  amount: number; // 金額
  expiryDate: string; // 有効期限
  usageScope: string; // 使用範囲
};

export const Card = ({ title, amount, expiryDate, usageScope }: CardProps) => {
  return (
    <MuiCard
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#F0F0F0",
        padding: 2,
        position: "relative",
        overflow: "visible",
        pt: 5,
      }}
    >
      {/* 上部の丸いアイコン */}
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: "#A9A9A9",
          borderRadius: "50%",
          position: "absolute",
          top: -25,
          left: "50%",
          transform: "translateX(-50%)",
          mt: 5,
        }}
      />

      <CardContent>
        {/* 金額 */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#000",
            marginBottom: 2,
            mt: 3,
          }}
        >
          {amount}円
        </Typography>

        {/* バーコード */}
        <Box
          sx={{
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          <img
            src="https://barcode.tec-it.com/barcode.ashx?data=7000&type=Code128&translate-esc=true&width=500&height=200"
            alt="バーコード"
            style={{
              width: "100%",
              height: "50px",
              objectFit: "contain",
            }}
          />
        </Box>

        <Divider sx={{ marginY: 2 }} />

        {/* 有効期限 */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
          <Typography variant="body2" sx={{ color: "#666" }}>
            有効期限
          </Typography>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {expiryDate}
          </Typography>
        </Box>

        {/* 使用範囲 */}
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
          <Typography variant="body2" sx={{ color: "#666" }}>
            使用範囲
          </Typography>
          <Typography variant="body2" sx={{ color: "#000" }}>
            {usageScope}
          </Typography>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        {/* 詳細情報 */}
        <Box
          sx={{
            fontSize: "12px",
            color: "#666",
            textAlign: "left",
          }}
        >
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            1. クーポンは1回のご購入につき1枚のみご利用いただけます。
            <br />
            2. 他のクーポンや割引サービスの併用はできません。
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};