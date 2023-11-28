import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from "@mui/icons-material/Add";
import MuiDatePicker from "./DatePicker";
import { Input, Button } from "../../Shared";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

function MuiGoalModal({ handleGoalAddition }) {
  // states
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(0);

  // handleSubmit function
  const handleSubmit = () => {
    if (!goal || !startDate || !endDate) return;
    const formattedStartDate = dayjs(startDate).format("MMM DD, YYYY");
    const formattedEndDate = dayjs(endDate).format("MMM DD, YYYY");
    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);
    const date1 = dayjs(startDate);
    const date2 = dayjs(endDate);
    const numberOfDays = date2.diff(date1, "day");
    console.log(`number of days type: ${typeof numberOfDays}`);
    setNumberOfDays(numberOfDays);
    const newGoal = {
      id: uuidv4(),
      goal,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      color: "primary",
      numberOfDays,
      progress: 0,
    };
    handleGoalAddition(newGoal);
    setOpen(false);
    setGoal("");
    setStartDate(null);
    setEndDate(null);
  };

  // handleGoalChange function
  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  // handleStartDate function
  const handleStartDate = (date) => {
    setStartDate(date);
  };

  // handleEndDate function
  const handleEndDate = (date) => {
    setEndDate(date);
  };

  // handleClickOpen function
  const handleClickOpen = () => {
    setOpen(true);
  };

  // handleClose function
  const handleClose = () => {
    setOpen(false);
  };

  // other
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
            {/* Goal Name Input */}
            <Input value={goal} onChange={handleGoalChange} />
            {/* Start Date Picker */}
            <MuiDatePicker
              label="Start Date"
              handleDateChange={handleStartDate}
            />
            {/* End Date Picker */}
            <MuiDatePicker label="End Date" handleDateChange={handleEndDate} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} type="submit" autoFocus>
            Submit Goal
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MuiGoalModal;
