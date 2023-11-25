import "./App.css";
import MuiNavbar from "./components/navigation/MuiNavbar";
import GoalLists from "./components/progressBars/GoalLists";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material"; // Import ThemeProvider
import { darkCoffeeTheme, tropicalBreezeTheme } from "./styles/theme";
import MuiGoalModal from "./components/goalAdding/MuiGoalModal";

function App() {
  return (
    <ThemeProvider theme={darkCoffeeTheme}>
      <MuiNavbar />
      <Container maxWidth="l">
        <MuiGoalModal />
        <GoalLists />
      </Container>
    </ThemeProvider>
  );
}

export default App;
