import React from "react";
import { InputBox } from "./InputbarStyle";

interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

interface InputbarProps {
  setNewTask: (value: string) => void;
  newTask: string;
  selectedCategory: string;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const Inputbar: React.FC<InputbarProps> = ({
  setNewTask,
  newTask,
  selectedCategory,
  tasks,
  setTasks
}) => {
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task = {
      text: newTask.trim(),
      category: selectedCategory,
      done: false,
      id: new Date().getTime()
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };
  return (
    <InputBox
      onChange={(e) => setNewTask(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      placeholder="Add a new task"
      value={newTask}
    />
  );
};

export default Inputbar;
