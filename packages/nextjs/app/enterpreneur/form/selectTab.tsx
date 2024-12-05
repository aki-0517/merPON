import { FC } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";

type SelectTabProps = {
  value: tabType;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

type tabType = "割引券" | "引換券" | "会員券";

const CustomTabs = styled(Tabs)({
  backgroundColor: "#D3D3D3", // 背景色
  borderRadius: "20px", // 丸みを付ける
  padding: "4px", // 全体のパディング
  "& .MuiTabs-indicator": {
    display: "none", // デフォルトのインジケータを非表示
  },
});

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none", // テキストの大文字変換を無効化
  fontWeight: 500, // テキストの太さ
  fontSize: "1.2rem", // フォントサイズ
  color: "black", // 未選択時の文字色
  borderRadius: "100px", // タブの丸み
  minWidth: "auto", // タブの幅調整
  padding: "8px 30px", // タブ内の余白
  "&.Mui-selected": {
    backgroundColor: "white", // 選択時の背景色
    color: "black", // 選択時の文字色
  },
}));

export const SelectTab: FC<SelectTabProps> = ({ value, handleChange }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
      <CustomTabs value={value} onChange={handleChange} aria-label="custom tabs">
        <CustomTab
          sx={{
            color: value === "割引券" ? "white" : "black",
            backgroundColor: value === "割引券" ? "red" : "transparent",
          }}
          label="割引券"
        />
        <CustomTab
          sx={{
            color: value === "引換券" ? "white" : "black",
            backgroundColor: value === "引換券" ? "red" : "transparent",
          }}
          label="引換券"
        />
        <CustomTab
          sx={{
            color: value === "会員券" ? "white" : "black",
            backgroundColor: value === "会員券" ? "red" : "transparent",
          }}
          label="会員券"
        />
      </CustomTabs>
    </Box>
  );
};
