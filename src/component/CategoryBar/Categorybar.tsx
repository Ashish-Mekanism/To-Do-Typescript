import {
  CategoryItem,
  CategoryList,
  SidebarContainer
} from "./CategorybarStyled";
import { useSetAtom } from "jotai";
import { categoryAtom } from "../Atom/TodoAtom";

const categories = [
  "All Tasks",
  "Favorites",
  "Groceries",
  "Work",
  "Study",
  "Sports"
];

const Categorybar = () => {
  const setSelectedCategory = useSetAtom(categoryAtom);
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
