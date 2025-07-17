import React, { useState } from "react";
import {
  AllTodoList,
  CategoryTitle,
  TodoCategorylable,
  TodoList,
  TodolistItem,
  TodoName
} from "./TodoListStyle";
import Inputbar from "../Inputbar/Inputbar";
import TaskCheckbox from "../Button/Button";

interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

interface TodoSideBarProps {
  selectedCategory: string;
}

const TodoSideBar = ({ selectedCategory }: TodoSideBarProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const toggleTaskDone = (taskId: number) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  let filteredTasks;
  if (selectedCategory === "All Tasks") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) => task.category === selectedCategory);
  }

  return (
    <TodoList>
      <CategoryTitle>{selectedCategory}</CategoryTitle>
      <Inputbar
        setNewTask={setNewTask}
        newTask={newTask}
        selectedCategory={selectedCategory}
        tasks={tasks}
        setTasks={setTasks}
      />
      <AllTodoList>
        {filteredTasks.map((task, id) => (
          <TodolistItem key={id}>
            <TaskCheckbox
              taskId={task.id}
              taskDone={task.done}
              onToggle={toggleTaskDone}
            />
            <TodoName done={task.done}>{task.text}</TodoName>

            <TodoCategorylable category={task.category}>
              {task.category}
            </TodoCategorylable>
          </TodolistItem>
        ))}
      </AllTodoList>
    </TodoList>
  );
};

export default TodoSideBar;
