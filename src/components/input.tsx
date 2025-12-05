import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

interface MoneyInputProps {
  label?: string;
  onSubmit?: (value: string) => void;  // raw value without commas
  maxIntegerDigits?: number;
  maxDecimalDigits?: number;
}

const MoneyInput: React.FC<MoneyInputProps> = ({
  label = "Amount",
  onSubmit,
  maxIntegerDigits = 8,
  maxDecimalDigits = 2,
}) => {
  const [rawValue, setRawValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/,/g, "");

    // Allow only digits + optional decimal
    if (!/^\d*\.?\d*$/.test(input)) return;

    const [intPart, decPart] = input.split(".");

    // Limit integer digits
    if (intPart.length > maxIntegerDigits) return;

    // Limit decimal digits
    if (decPart && decPart.length > maxDecimalDigits) return;

    setRawValue(input);

    // Format integer part with commas (Indian format)
    const formattedInt = intPart ? Number(intPart).toLocaleString("en-IN") : "";
    const formatted =
      decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;

    setDisplayValue(formatted);
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(rawValue);
  };

  return (
    <Stack spacing={2} width="300px" alignItems="center">
      <TextField
        label={label}
        variant="outlined"
        value={displayValue}
        onChange={handleChange}
        fullWidth
      />

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
};

export default MoneyInput;