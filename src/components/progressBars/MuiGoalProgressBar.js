import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { green, blue } from "@mui/material/colors";
import { darkCoffeeTheme } from "../../styles/theme";

function MuiGoalProgressBar({ goal, endDate, progress }) {
  const deleteGoal = () => {
    console.log("delete goal");
  };
  const handleMoreOptionsClick = () => {
    console.log("handle more options click");
  };
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          {/* GOAL TEXT  */}
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {goal}
          </Typography>
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
              sx={{ position: "relative" }}
            >
              {endDate}
            </Typography>
            {/* MORE OPTIONS ICON  */}
            <IconButton onClick={handleMoreOptionsClick}>
              <MoreHorizIcon />
            </IconButton>
            {/* DELETE BUTTON ICON */}
            <IconButton onClick={deleteGoal}>
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
          </Box>
        </Box>
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
          <LinearProgress
            variant="determinate"
            value={progress}
            color="accent"
            style={{ width: "100%", padding: "10px", height: 8 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
export default MuiGoalProgressBar;
