import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image-9.png";
import { Button, Divider, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LocalPostOffice,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addTitleForNavBar } from "../redux/labSlice";

const navLinks = [
  {
    id: "1",
    name: "Admin",
    icon: <AdminPanelSettingsOutlined />,
    title: "Add Lab",
    href: "/register",
  },
  {
    id: "2",
    name: "Lab Counter",
    icon: <LocalPostOffice />,
    title: "Lab counter",
    href: "/",
  },
];

function SideBar() {
  const dispatch = useDispatch();

  const handleTitle = (title) => {
    dispatch(addTitleForNavBar(title));
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#3B76EF",
        width: "192px",
        borderTopRightRadius: "5px",
        padding: "10px",
      }}
    >
      <Link
        to={"/"}
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          gap: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <img src={image} style={{ width: "48px" }} alt="Logo" />
        <Typography sx={{ fontWeight: "400", fontSize: "15px" }}>
          MATERNO
        </Typography>
      </Link>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {navLinks.map((i) => (
          <Link to={i.href}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                color: "white",
              }}
              onClick={() => handleTitle(i.title)}
            >
              <Typography>{i.name}</Typography>
              <div>{i.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
