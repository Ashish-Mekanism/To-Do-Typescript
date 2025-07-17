import React from "react";
import {
  CategoryItem,
  CategoryList,
  SidebarContainer
} from "./CategorybarStyled";

const categories = [
  "All Tasks",
  "Favorites",
  "Groceries",
  "Work",
  "Study",
  "Sports"
];

interface CategorybarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categorybar = ({ setSelectedCategory }: CategorybarProps) => {
  return (
    <SidebarContainer>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem
            category={category}
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryItem>
        ))}
        <CategoryItem color="gray">+ New category</CategoryItem>
      </CategoryList>
    </SidebarContainer>
  );
};

export default Categorybar;
