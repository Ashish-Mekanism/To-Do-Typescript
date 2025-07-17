import styled from "styled-components";

export const TodoList = styled.div`
  width: 78%;
  color: black;
  background-color: white;
  padding-top: 66px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputBox = styled.input`
  width: 35%;
  padding: 10px;
  background-color: #e1dede;
  font-family: "SF Pro";
  font-weight: 400;
  color: black;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 28px;
`;

export const TodolistItem = styled.div`
  font-family: "SF Pro";
  font-weight: 400;
  color: black;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 10px;
  width: 100%;
  padding-top: 20px;
`;

export const Checkbox = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 3px solid #eb5757;
  cursor: pointer;
  background-color: white;
`;

interface TodoNameProps {
  done: boolean;
}

export const TodoName = styled.div<TodoNameProps>`
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 30px;
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

export const CategoryTitle = styled.div`
  font-size: bold;
  font-weight: 700;
  font-size: 50px;
  font-family: "SF Pro Display";
  color: black;
  padding-top: 6px;
`;

export const TodoCategorydiv = styled.div`
  display: flex;
`;

interface TodoCategoryTitleProps {
  category?: string;
}

export const TodoCategorylable = styled.div<TodoCategoryTitleProps>`
  font-family: "SF Pro Display";
  font-weight: 300;
  color: #ffffff;
  font-size: 13px;
  border-radius: 40px;
  background-color: ${({ category }) =>
    category ? categoryColour[category] || "#000000" : "white"};
  text-align: center;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AllTodoList = styled.div`
  margin-top: 24px;
`;
