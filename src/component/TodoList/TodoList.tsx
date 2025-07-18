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
import { useAtomValue } from "jotai";
import { categoryAtom, tasksAtom } from "../Atom/TodoAtom";

interface Task {
  text: string;
  category: string;
  done: boolean;
  id: number;
}

const TodoSideBar = () => {
  const selectedCategory = useAtomValue(categoryAtom);
  const tasks = useAtomValue<Task[]>(tasksAtom);

  let filteredTasks;
  if (selectedCategory === "All Tasks") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) => task.category === selectedCategory);
  }

  return (
    <TodoList>
      <CategoryTitle size="50px" weight="700">
        {selectedCategory}
      </CategoryTitle>
      <Inputbar />
      <AllTodoList>
        {filteredTasks.map((task, id) => (
          <TodolistItem key={id}>
            <TaskCheckbox task={task} />
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
