import React from "react";
import { Box, Typography } from "@mui/material";
import type { FooterModel } from "./FooterModel";

const Footer: React.FC<FooterModel> = ({
  text = "© 2025 My Application",
  height = "60px",
  backgroundColor = "#f5f5f5",
  align = "center",
}) => {
  return (
    <Box
      sx={{
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: align === "left" 
          ? "flex-start" 
          : align === "right"
          ? "flex-end"
          : "center",
        padding: "0 20px",
        backgroundColor,
        borderTop: "1px solid #ddd",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Footer;
