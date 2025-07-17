import styled from "styled-components";
import "../../style/sf-fonts.css";

export const SidebarContainer = styled.div`
  width: 22%;
  color: black;
  border-right: 1px solid #d1d5db;
  padding-top: 126px;
  padding-left: 100px;
  background-color: white;
  min-width: 310px;
`;

export const CategoryWrapper = styled.div`
  padding-top: 70px;
  padding-left: 62px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

interface CategoryItemProps {
  category?: string;
}

export const CategoryItem = styled.li<CategoryItemProps>`
  font-size: 30px;
  font-weight: ${({ category }) => (category === "All Tasks" ? 700 : 400)};
  padding: 12px 16px;
  cursor: pointer;
  font-family: "SF Pro Display";
  color: ${(props) => (props.color === "gray" ? "#ABABAB" : "black")};

  &:hover {
    color: red;
  }
`;
