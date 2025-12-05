import React from "react";
import { Box } from "@mui/material";

interface FullPageLayoutProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const FullPageLayout: React.FC<FullPageLayoutProps> = ({ header, body, footer }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header: 10% + sticky */}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#fff",
        }}
      >
        {header}
      </Box>

      {/* Body: scrollable, takes 80% */}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          overflowY: "auto",
        }}
      >
        {body}
      </Box>

      {/* Footer: 10% */}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
        }}
      >
        {footer}
      </Box>
    </Box>
  );
};

export default FullPageLayout;
