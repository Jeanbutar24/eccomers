import { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const onMouseEnter = () => {
    setTitle("Buy Now");
  };
  const onMouseLeave = () => {
    setTitle(item.title);
  };
  const price = item.price.toLocaleString();
  return (
    <div className="containerProducts">
      <img src={item.img} alt={item.title} />
      <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
        <h2
          className="title"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {title}
        </h2>
      </Link>
      <p>Rp {price},00</p>
    </div>
  );
};

export default Products;
