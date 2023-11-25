import MuiGoalProgressBar from "./MuiGoalProgressBar";
import placeholderGoals from "../../data/placeholderGoals.json";
import userGoals from "../../data/userGoals.json";

function GoalLists() {
  const tempGoals = placeholderGoals;
  return (
    <div>
      {tempGoals.map((goal) => (
        <MuiGoalProgressBar
          key={goal.id}
          goal={goal.goal}
          startDate={goal.startDate}
          endDate={goal.endDate}
          progress={goal.progress}
        />
      ))}
    </div>
  );
}
export default GoalLists;
