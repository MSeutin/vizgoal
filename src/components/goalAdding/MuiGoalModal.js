import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from "@mui/icons-material/Add";
import MuiDatePicker from "./MuiDatePicker";
import MuiTextField from "./MuiTextField";
import { v4 as uuidv4 } from "uuid";

function MuiGoalModal() {
  // states
  const [open, setOpen] = useState(false);
  const [goalData, setGoalData] = useState({
    id: uuidv4(),
    goal: "",
    startDate: "",
    endDate: "",
    progress: 0,
  });

  // other
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // handle click functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          color="blue"
          aria-label="add"
          disableFocusRipple
          sx={{
            color: "#3f51b5",
            ":hover": {
              color: "#f2f2f2",
              backgroundColor: "#3f51b5",
            },
          }}
        >
          <AddIcon />
        </Button>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add goal"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            {/* Text and DateFields */}
            <MuiTextField />
            <MuiDatePicker label="Start Date" />
            <MuiDatePicker label="End Date" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            sx={{ background: "#3f51b5", color: "#fff" }}
            autoFocus
          >
            Submit Goal
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MuiGoalModal;
