import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navigation";
import { GoalLists } from "./components/Goal/GoalManagement";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material"; // Import ThemeProvider
import { darkCoffeeTheme } from "./styles/theme";
import { GoalModal } from "./components/Goal/Adding/";
import { Footer } from "./components/Footer";
import placeholderGoals from "./data/placeholderGoals.json";

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
      <Navbar />
      <Container maxWidth="l">
        <GoalModal handleGoalAddition={handleGoalAddition} />
        <GoalLists
          goals={goals}
          handleGoalRemoval={handleGoalRemoval}
          goalExample={goalExample}
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
