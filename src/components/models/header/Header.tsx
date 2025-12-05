import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import type { HeaderModel } from "./HeaderModel"; // << type-only import

const Header: React.FC<HeaderModel> = ({
  title,
  subtitle,
  align = "left",
  showDivider = true,
}) => {
  return (
    <Box sx={{ textAlign: align , width: "100%", }}>
      <Typography variant="h5" fontWeight="bold" padding={'16px'}>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}

      {showDivider && <Divider  />}
    </Box>
  );
};

export default Header;
