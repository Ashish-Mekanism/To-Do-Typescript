import React from "react";
import { Checkbox } from "./ButtonStyle";

interface TaskCheckboxProps {
  taskId: number;
  taskDone: boolean;
  onToggle: (taskId: number) => void;
}

const TaskCheckbox = ({ taskId, taskDone, onToggle }: TaskCheckboxProps) => {
  return (
    <Checkbox onClick={() => onToggle(taskId)}>{taskDone ? "✅" : ""}</Checkbox>
  );
};

export default TaskCheckbox;
