import React from "react";
import { Box } from "@mui/material";

interface Props {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode; // still best practice
  footer: React.ReactNode;
}

const FullPageLayout: React.FC<Props> = ({ header, sidebar, children, footer }) => {
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
      {/* HEADER – 10vh (same desktop style) */}
      <Box
        sx={{
          height: "10vh",
          minHeight: "70px",             //  prevents mobile collapse
          // borderBottom: "1px solid #ccc",
          background: "#fff",
        }}
      >
        {header}
      </Box>

      {/* BODY + SIDEBAR */}
      <Box
        sx={{
          display: "flex",
          height: "80vh",                //  same desktop style
          overflow: "hidden",
        }}
      >
        {/* SIDEBAR – fixed width */}
        <Box
          sx={{
            width: "2px",
            minWidth: "250px",           //  stops collapsing on mobile mode
            borderRight: "1px solid #ccc",
            background: "#e0e0e0",
          }}
        >
          {sidebar}
        </Box>

        {/* MAIN CONTENT */}
        <Box
          sx={{
            flexGrow: 1,
            height: "80vh",
            overflowY: "auto",
            p: 2,
          }}
        >
          {children}
        </Box>
      </Box>

      {/* FOOTER – 10vh (same desktop style) */}
      <Box
        sx={{
          height: "10vh",
          minHeight: "50px",             //  prevents collapse
          borderTop: "1px solid #ccc",
          background: "#f5f5f5",
        }}
      >
        {footer}
      </Box>
    </Box>
  );
};

export default FullPageLayout;
