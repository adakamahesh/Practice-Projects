import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { SidebarModel } from "./SidebarModel";

const Sidebar: React.FC<SidebarModel> = ({
  width = 240,
  backgroundColor = "grey",
  items,
}) => {
  return (
    <Box
      sx={{
        width,
        height: "100vh",
        backgroundColor,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        px: 1,
        py: 2,
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{ color: "#fff", borderRadius: 1, mb: 1 }}
            onClick={item.onClick}
            component={item.href ? "a" : "div"}
            href={item.href}
          >
            {item.icon && <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
