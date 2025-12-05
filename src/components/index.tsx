import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import MoneyInput from './input';

function index() {
    const [storedValue, setStoredValue] = useState("");
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <MoneyInput
                label="Enter Amount"
                onSubmit={(value) => setStoredValue(value)}
            />

            {storedValue && (
                <Typography variant="h6">
                    Stored Raw Value : {storedValue}
                </Typography>
            )}
        </Box>
    );
}

export default index
