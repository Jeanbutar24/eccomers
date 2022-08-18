import "./Product.css";
import Products from "./Products";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = ({ category, sort, filter }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/product?categories=${category}`
            : "http://localhost:5000/api/product"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (category) {
      if (filter.size === "" && filter.color === "") {
        setFilterProducts(products);
      } else {
        setFilterProducts(
          products.filter((item) =>
            Object.entries(filter).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
      }
    }
  }, [category, products, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "low") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <div className="containerProduct">
      <div className="wrapper">
        {category
          ? filterProducts.map((item, index) => (
              <Products item={item} key={index} />
            ))
          : products.map((item, index) => <Products item={item} key={index} />)}
      </div>
    </div>
  );
};

export default Product;
