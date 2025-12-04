import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

const NumberInput: React.FC = () => {
    const [rawValue, setRawValue] = useState("");        // raw value without commas
    const [displayValue, setDisplayValue] = useState(""); // formatted value
    const [stored, setStored] = useState("");            // stored raw value

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/,/g, ""); // remove commas

        // Allow only numbers and dot
        if (!/^\d*\.?\d*$/.test(input)) return;

        // Split into integer and decimal parts
        const [intPart, decPart] = input.split(".");

        // Limit integer to 8 digits, decimal to 2 digits
        if (intPart.length > 8) return;
        if (decPart && decPart.length > 2) return;

        setRawValue(input); // save raw value

        // Format integer part with commas
        const formattedInt = intPart ? Number(intPart).toLocaleString("en-IN") : "";
        const formatted = decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;

        setDisplayValue(formatted);// Update display value
    };

    const handleSubmit = () => {
        setStored(rawValue); // store raw number without commas
        setDisplayValue('')
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

                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>

                {stored && (
                    <p style={{ marginTop: "10px" }}>
                        Stored Output : {stored}
                    </p>
                )}
            </Stack>
        </Box>
    );
};

export default NumberInput;