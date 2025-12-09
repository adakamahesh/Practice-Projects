import React from "react";
import { Box } from "@mui/material";

interface FullPageLayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;   // ⭐ added sidebar here
  body: React.ReactNode;
  footer: React.ReactNode;
}

const FullPageLayout: React.FC<FullPageLayoutProps> = ({
  header,
  sidebar,
  body,
  footer,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ⭐ HEADER FIXED 10% */}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 20,
          borderBottom: "1px solid #ccc",
        }}
      >
        {header}
      </Box>

      {/* ⭐ BODY + SIDEBAR AREA (80%) */}
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          overflow: "hidden",   // IMPORTANT
        }}
      >
        {/* ⭐ FIXED SIDEBAR */}
        <Box
          sx={{
            width: "250px",
            height: "80vh",
            background: "#e0e0e0",
            borderRight: "1px solid #ccc",
          }}
        >
          {sidebar}
        </Box>

        {/* ⭐ MAIN CONTENT (scrolls) */}
        <Box
          sx={{
            flexGrow: 1,
            height: "80vh",
            overflowY: "auto",
            padding: 2,
          }}
        >
          {body}
        </Box>
      </Box>

      {/* ⭐ FOOTER FIXED 10% */}
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          background: "#f5f5f5",
          borderTop: "1px solid #ccc",
        }}
      >
        {footer}
      </Box>
    </Box>
  );
};

export default FullPageLayout;
