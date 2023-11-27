import "./App.css";
import { useState } from "react";
import MuiNavbar from "./components/navigation/MuiNavbar";
import GoalLists from "./components/progressBars/GoalLists";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material"; // Import ThemeProvider
import { darkCoffeeTheme, tropicalBreezeTheme } from "./styles/theme";
import MuiGoalModal from "./components/goalAdding/MuiGoalModal";
import placeholderGoals from "./data/placeholderGoals.json";
import userGoals from "./data/userGoals.json";

function App() {
  const [goalExample, setGoalExample] = useState(placeholderGoals);
  const [goals, setGoals] = useState([]);
  // handle goal removal function
  const handleGoalRemoval = (goalId) => {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  };
  // handle goal addition function
  const handleGoalAddition = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <ThemeProvider theme={darkCoffeeTheme}>
      <MuiNavbar />
      <Container maxWidth="l">
        <MuiGoalModal handleGoalAddition={handleGoalAddition} />
        <GoalLists
          goals={goals}
          handleGoalRemoval={handleGoalRemoval}
          goalExample={goalExample}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
