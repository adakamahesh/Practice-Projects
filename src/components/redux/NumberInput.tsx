import React, { useState } from "react";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setNumber } from "./numberSlice";
import type { RootState, AppDispatch } from "../../app/store";

const NumberInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const storedValue = useSelector((state: RootState) => state.number.value);

  const [rawValue, setRawValue] = useState(""); // local raw input
  const [displayValue, setDisplayValue] = useState(""); // formatted input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/,/g, "");

    if (!/^\d*\.?\d*$/.test(input)) return;

    const [intPart, decPart] = input.split(".");

    if (intPart.length > 8) return;
    if (decPart && decPart.length > 2) return;

    setRawValue(input);

    const formattedInt = intPart ? Number(intPart).toLocaleString("en-IN") : "";
    const formatted = decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;

    setDisplayValue(formatted);
  };

  const handleSubmit = () => {
    dispatch(setNumber(rawValue)); // store in RTK
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} alignItems="center" width="300px">
        <TextField
          label="Amount"
          variant="outlined"
          value={displayValue}
          onChange={handleChange}
          fullWidth
          inputProps={{ maxLength: 15 }}
        />

        <Button variant="contained" onClick={handleSubmit} fullWidth>
          Submit
        </Button>

        {storedValue && (
          <Typography variant="body1" align="center">
            RTK Stored Value: {storedValue}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default NumberInput;
