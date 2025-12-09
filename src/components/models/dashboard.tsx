import FullPageLayout from "../models/layouts/FullPageLayout";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => navigate("/home"),
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  return (
    <FullPageLayout
      header={<Header title="LMS" />}
      sidebar={<Sidebar items={sidebarItems} />}
      body={
        <Body>
          <Outlet />   {/* Child pages appear here */}
        </Body>
      }
      footer={<Footer text="© 2025 Mahesh" />}
    />
  );
};

export default Dashboard;
