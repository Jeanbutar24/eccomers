import { useState } from "react";
import "./ProductPromo.css";
const ProductPromo = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const onMouseEnter = () => {
    setTitle("Buy Now");
  };
  const onMouseLeave = () => {
    setTitle(item.title);
  };
  return (
    <div className="containerProductPromo">
      <img src={item.img} alt={item.title} />
      <h2
        className="title"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {title}
      </h2>
      <p>{item.discount}</p>
    </div>
  );
};

export default ProductPromo;
