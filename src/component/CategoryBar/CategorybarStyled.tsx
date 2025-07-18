import styled from "styled-components";
import "../../style/sf-fonts.css";
import { text } from "../Typography/Text";

export const SidebarContainer = styled.div`
  width: 22%;
  border-right: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 310px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const CategoryList = styled.ul`
  height: 70vh;
`;
interface CategoryProps {
  category?: string;
}

export const CategoryItem = styled(text)<CategoryProps>`
  cursor: pointer;
  font-weight: ${({ category }) => (category === "All Tasks" ? "700" : "400")};
  color: ${({ color }) => (color === "gray" ? "#ABABAB" : "black")};
  padding: 12px 16px;

  &:hover {
    color: red;
  }
`;
