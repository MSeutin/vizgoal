import { createTheme } from "@mui/material/styles";

const darkCoffeeTheme = createTheme({
  palette: {
    primary: {
      main: "#424242", // dark charcoal
    },
    secondary: {
      main: "#E6E6E6", // light charcoal
    },
    accent: {
      main: "#ED6463", // vibrant red
    },
    blue: {
      main: "#3f51b5",
    },
    text: {
      primary: "#424242", // dark gray for primary text
      secondary: "#808080", // lighter gray for secondary text
    },
    background: {
      paper: "#EBEBEB", // medium gray for background
    },
  },
});

const tropicalBreezeTheme = createTheme({
  palette: {
    primary: {
      main: "#7CFC00", // lime green
    },
    secondary: {
      main: "#FFD700", // golden yellow
    },
    accent: {
      main: "#00BCD4", // light blue
    },
    text: {
      primary: "#212121", // dark gray for primary text
      secondary: "#424242", // slightly lighter gray for secondary text
    },
    background: {
      paper: "#F5F5F5", // light gray for background
    },
  },
});

export { darkCoffeeTheme, tropicalBreezeTheme };
