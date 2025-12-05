import React from "react";
import { Box } from "@mui/material";
import type { BodyModel } from "./BodyModel";

const Body: React.FC<BodyModel> = ({
  children,
  padding = 2,
  backgroundColor = "transparent",
}) => {
  return (
    <Box
      sx={{
        maxWidth:"100%",
        margin: "0 auto",
        padding,
        backgroundColor,
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
