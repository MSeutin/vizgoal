import "./App.css";
import MuiNavbar from "./components/MuiNavbar";
import MuiFabButton from "./components/MuiFabButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiNavbar />
      <MuiFabButton />
    </ThemeProvider>
  );
}

export default App;
