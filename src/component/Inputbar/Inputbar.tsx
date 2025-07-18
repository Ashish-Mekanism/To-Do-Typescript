import React from "react";
import { InputBox } from "./InputbarStyle";
import { categoryAtom, newtasksAtom, tasksAtom } from "../Atom/TodoAtom";
import { useAtom, useAtomValue } from "jotai";

interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

const Inputbar = () => {
  const selectedCategory = useAtomValue(categoryAtom);
  const [tasks, setTasks] = useAtom<Task[]>(tasksAtom);
  const [newTask, setNewTask] = useAtom(newtasksAtom);

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
