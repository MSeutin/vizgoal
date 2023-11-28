// GoalHeader.js
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey } from "@mui/material/colors";
import { darkCoffeeTheme } from "../../../styles/theme";
import { GoalDeleteButton } from "../GoalManagement";

function GoalHeader({
  goal,
  startDate,
  numberOfDays,
  endDate,
  handleMoreOptionsClick,
  handleGoalRemoval,
  id,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 1,
      }}
    >
      {/* Box for Goal and Start Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Goal  */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "0.05rem",
            textTransform: "capitalize",
            mr: 1,
            color: "#A52A2A",
          }}
        >
          {goal}
        </Typography>
        {/* Start Date */}
        <Typography
          variant="body2"
          style={{ color: darkCoffeeTheme.palette.text.secondary }}
        >
          {startDate}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#303030",
            ml: 4,
          }}
        >
          {numberOfDays}{" "}
          <span style={{ color: grey[500], fontSize: "1rem" }}>days left</span>
        </Typography>
      </Box>
      {/* BOX FOR BOTH END DATE AND DELETE BUTTON  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* END DATE */}
        <Typography
          variant="body2"
          style={{ color: darkCoffeeTheme.palette.text.secondary }}
        >
          {endDate}
        </Typography>
        {/* MORE OPTIONS ICON  */}
        <IconButton onClick={handleMoreOptionsClick}>
          <MoreHorizIcon />
        </IconButton>
        {/* DELETE BUTTON ICON */}
        <GoalDeleteButton onDelete={() => handleGoalRemoval(id)} />
      </Box>
    </Box>
  );
}

export default GoalHeader;
