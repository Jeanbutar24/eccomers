import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ item }) => {
  return (
    <div className="categoryContainer">
      <div className="wrapper">
        <Link to={`/products/${item.title}`} style={{ textDecoration: "none" }}>
          <h2 className="name">{item.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Category;
