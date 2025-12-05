import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import FullPageLayout from "../models/layouts/FullPageLayout";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebarItems = [
  { label: "Home", icon: <HomeIcon />,  },
  { label: "Settings", icon: <SettingsIcon />, onClick: () => alert("Settings clicked") },
];

const Dashboard = () => {
  return (
    <FullPageLayout
      header={<Header title="LMS" />}
      body={
        <Box
          sx={{
            display: "flex",
            width: "100%",
            // height: "100%",        // fill remaining height
          }}
        >
          <Sidebar items={sidebarItems} />  {/* full height */}
          <Body padding={3} sx={{ flexGrow: 1}}>
            Main content goes here
          </Body>
        </Box>
      }
      footer={<Footer text="© 2025 Mahesh" />}
    />
  );
};

export default Dashboard;
