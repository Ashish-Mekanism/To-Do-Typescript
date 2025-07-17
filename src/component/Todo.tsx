import React, { useState } from "react";
import { MainContainer } from "./TodoStyle";
import Categorybar from "./CategoryBar/Categorybar";
import TodoSideBar from "./TodoList/TodoList";

const Todo = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Tasks");

  return (
    <MainContainer>
      <Categorybar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TodoSideBar selectedCategory={selectedCategory} />
    </MainContainer>
  );
};

export default Todo;
