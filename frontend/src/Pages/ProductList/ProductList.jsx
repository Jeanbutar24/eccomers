import Product from "../../Components/Product/Product";
import "./ProductList.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Categories from "../../Components/Category/Categories";
const ProductList = () => {
  const location = useLocation();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const category = location.pathname.split("/")[2];

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <>
      <Header />
      <div className="containerProductList">
        <div className="categories">
          <Categories />
        </div>
        <h1 className="title">{category}</h1>
        {category ? (
          <div className="filterContainer">
            <div className="filter">
              <span className="filterText">Filter Products:</span>
              <select name="color" onChange={handleFilter}>
                <option value="">Color</option>
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
                <option>yellow</option>
                <option>green</option>
              </select>
              <select name="size" onChange={handleFilter}>
                <option value="">Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div className="filter">
              <span className="filterText">Sort Products:</span>
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="low">Price (low)</option>
                <option value="high">Price (high)</option>
              </select>
            </div>
          </div>
        ) : (
          ""
        )}
        <Product category={category} sort={sort} filter={filter} />
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
