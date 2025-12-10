import FullPageLayout from "../models/layouts/FullPageLayout";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

const Dashboard = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { label: "Home", icon: <HomeIcon />, onClick: () => navigate("/home") },
    { label: "Settings", icon: <SettingsIcon />, onClick: () => alert("Settings clicked") },
  ];

  return (
    <FullPageLayout
      header={<Header title="LMS" />}
      sidebar={<Sidebar items={sidebarItems} />}
      footer={<Footer text="© 2025 Mahesh" />}
    >
      <Outlet /> {/*  simplest best-practice way */}
    </FullPageLayout>
  );
};

export default Dashboard;