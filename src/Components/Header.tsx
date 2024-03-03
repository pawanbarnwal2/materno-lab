import { ArrowBack } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const { navTitle } = useSelector((state) => state.lab);
  console.log(navTitle);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1rem",
          height: "24px",
        }}
      >
        {/* <p>Icon</p> */}
        {location.pathname !== "/" && (
          <button onClick={handleBack} style={{ padding: "0px" }}>
            <ArrowBack />
          </button>
        )}
        <span style={{ margin: "0 1rem" }}>
          {location.pathname !== "/" ? navTitle : "Home"}
        </span>
      </Box>
      <Divider />
    </div>
  );
}

export default Header;
