import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { green, blue, red, grey } from "@mui/material/colors";
import { darkCoffeeTheme } from "../../styles/theme";

function MuiGoalProgressBar({
  id,
  goal,
  startDate,
  endDate,
  numberOfDays,
  progress,
  handleGoalRemoval,
  color,
}) {
  const handleMoreOptionsClick = () => {
    console.log("handle more options click");
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        {/* Box for Goal, Start Date, End Date and Delete Button */}
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
              <span style={{ color: grey[500], fontSize: "1rem" }}>
                days left
              </span>
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
            <IconButton onClick={() => handleGoalRemoval(id)}>
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
export default MuiGoalProgressBar;
