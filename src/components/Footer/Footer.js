import React from "react";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Light background color
        padding: "10px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
      }}
    >
      <ContactMailIcon style={{ color: "gray" }} />
      <InfoIcon style={{ color: "gray" }} />
      <TwitterIcon style={{ color: "gray" }} />
    </Box>
  );
}
