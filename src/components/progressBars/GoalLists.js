import MuiGoalProgressBar from "./MuiGoalProgressBar";

function GoalLists({ goals, handleGoalRemoval, goalExample }) {
  return (
    <div>
      {goals.length > 0
        ? goals.map((goal) => (
            <MuiGoalProgressBar
              key={goal.id}
              id={goal.id}
              goal={goal.goal}
              startDate={goal.startDate}
              endDate={goal.endDate}
              color={goal.color}
              progress={goal.progress}
              numberOfDays={goal.numberOfDays}
              handleGoalRemoval={handleGoalRemoval}
            />
          ))
        : goalExample.map((goal) => (
            <MuiGoalProgressBar
              key={goal.id}
              id={goal.id}
              goal={goal.goal}
              startDate={goal.startDate}
              endDate={goal.endDate}
              color={goal.color}
              progress={goal.progress}
              numberOfDays={goal.numberOfDays}
              handleGoalRemoval={handleGoalRemoval}
            />
          ))}
    </div>
  );
}
export default GoalLists;
