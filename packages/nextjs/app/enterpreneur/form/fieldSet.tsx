import { useState } from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

type FiledSetProps = {
  title: string;
};

export const FiledSet: FC<FiledSetProps> = ({ title }) => {
  const [amount, setAmount] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [usage, setUsage] = useState<string>("会社全体");
  const [details, setDetails] = useState<string>("");
  const [storeName, setStoreName] = useState<string>("");

  return (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <TextField fullWidth label={title} value={amount} onChange={e => setAmount(e.target.value)} sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="開始期間"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="有効期限"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </Grid>
          </Grid>
          <RadioGroup row value={usage} onChange={e => setUsage(e.target.value)} sx={{ mt: 2, mb: 2 }}>
            <FormControlLabel value="会社全体" control={<Radio />} label="会社全体" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel value="店舗名入力" control={<Radio />} label="店舗名入力" />
              <TextField label="店舗名" value={storeName} onChange={e => setStoreName(e.target.value)} sx={{ ml: 2 }} />
            </Box>
          </RadioGroup>
          <TextField
            fullWidth
            label="詳細情報"
            multiline
            rows={4}
            value={details}
            onChange={e => setDetails(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="error" fullWidth sx={{ fontWeight: "bold" }}>
            クーポンを発行する
          </Button>
        </Box>
      </Grid>
    </>
  );
};