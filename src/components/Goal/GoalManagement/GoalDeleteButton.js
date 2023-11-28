import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";

function GoalDeleteButton({ onDelete }) {
  return (
    <IconButton onClick={onDelete}>
      <CloseIcon
        sx={{
          color: blue[500],
          filter: `invert(1)`, // Invert colors on hover
          "&:hover": {
            filter: `none`, // Remove filter on hover
          },
        }}
      />
    </IconButton>
  );
}

export default GoalDeleteButton;
