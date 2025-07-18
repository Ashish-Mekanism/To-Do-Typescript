import { MainContainer } from "./TodoStyle";
import Categorybar from "./CategoryBar/Categorybar";
import TodoSideBar from "./TodoList/TodoList";

const Todo = () => {
  return (
    <MainContainer>
      <Categorybar />
      <TodoSideBar />
    </MainContainer>
  );
};

export default Todo;
