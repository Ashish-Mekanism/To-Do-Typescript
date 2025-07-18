import styled from "styled-components";
import { text } from "../Typography/Text";

export const TodoList = styled.div`
  width: 78%;
  padding-top: 66px;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TodolistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;

export const Checkbox = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 3px solid #eb5757;
  cursor: pointer;
`;

interface TodoNameProps {
  done: boolean;
}

export const TodoName = styled.div<TodoNameProps>`
  color: ${({ done }) => (done ? "#EB5757" : "black")};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  transition: all 0.3s ease;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const categoryColour: { [key: string]: string } = {
  Work: "#2F80ED",
  Favorites: "#cbde7f",
  Groceries: "#27AE60",
  Study: "#F2994A",
  Sports: "#9B51E0",
  "All Tasks": "#000000"
};

export const CategoryTitle = styled(text)`
  padding-top: 6px;
`;

export const TodoCategorydiv = styled.div`
  display: flex;
`;

interface TodoCategoryTitleProps {
  category?: string;
}

export const TodoCategorylable = styled.div<TodoCategoryTitleProps>`
  font-weight: 300;
  color: #ffffff;
  font-size: 13px;
  border-radius: 40px;
  background-color: ${({ category }) =>
    category ? categoryColour[category] || "#000000" : "white"};
  text-align: center;
  padding: 8px 20px;
`;

export const AllTodoList = styled.div`
  margin-top: 24px;
`;
