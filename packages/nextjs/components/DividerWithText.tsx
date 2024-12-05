import React from "react";
import { Box, Typography } from "@mui/material";

export default function DividerWithText() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginY: 2, // 上下の余白
      }}
    >
      {/* 左の線 */}
      <Box
        sx={{
          flex: 1,
          borderBottom: "1px solid #E0E0E0", // 線のスタイル
          marginRight: 2, // テキストとの間隔
        }}
      ></Box>

      {/* テキスト */}
      <Typography
        variant="body1"
        sx={{
          color: "#666", // テキストの色
          whiteSpace: "nowrap", // テキストを1行で表示
          fontWeight: "bold", // 太字
        }}
      >
        過去発行されたクーポン
      </Typography>

      {/* 右の線 */}
      <Box
        sx={{
          flex: 1,
          borderBottom: "1px solid #E0E0E0", // 線のスタイル
          marginLeft: 2, // テキストとの間隔
        }}
      ></Box>
    </Box>
  );
}
