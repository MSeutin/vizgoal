// GoalProgressBar.js
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GoalHeader } from "../GoalHeader"; // Import the GoalHeader component

function GoalProgressBar({
  id,
  goal,
  startDate,
  endDate,
  numberOfDays,
  progress,
  handleGoalRemoval,
  color,
  handleMoreOptionsClick,
}) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        {/* Header Section using GoalHeader component */}
        <GoalHeader
          goal={goal}
          startDate={startDate}
          numberOfDays={numberOfDays}
          endDate={endDate}
          handleMoreOptionsClick={handleMoreOptionsClick}
          handleGoalRemoval={handleGoalRemoval}
          id={id}
        />

        {/* Progress Bar Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              mr: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
          {/* Progress Bar  */}
          <LinearProgress
            variant="determinate"
            value={progress}
            color={color}
            style={{ width: "100%", padding: "10px", height: 8 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default GoalProgressBar;
