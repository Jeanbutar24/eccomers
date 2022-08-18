import { categories } from "../../data";
import Category from "./Category";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categoriesContainer">
      <div className="wrapper">
        {categories.map((item, index) => (
          <Category item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
