import { productPromo } from "../../data";
import ProductPromo from "./ProductPromo";
import "./Promo.css";
const Promo = () => {
  return (
    <div className="containerPromo">
      <div className="wrapper">
        {productPromo.map((item, index) => (
          <ProductPromo item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Promo;
