import React from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductList from "./Pages/ProductList/ProductList";
import ProductId from "./Pages/ProductId/ProductId";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Pages/Profile/Profile";
// import Dashboard from "./Pages/Dashboard/Dashboard";
const App = () => {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  const user = useSelector((state) => state.user.currentUser);
  // {admin ? (
  //   <Route path="dashboard" element={<Dashboard />} />
  // ) : (
  //   <Route path="*" element={<Navigate to="/" replace />} />
  // )}
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {user ? (
              <Route path="cart" element={<Cart />} />
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
            {user ? (
              <Route path="profile" element={<Profile />} />
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
            {user ? (
              <Route path="*" element={<Navigate to="/" replace />} />
            ) : (
              <Route path="login" element={<Login />} />
            )}
            {user ? (
              <Route path="*" element={<Navigate to="/" replace />} />
            ) : (
              <Route path="register" element={<Register />} />
            )}
            <Route path="product">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<ProductId />} />
            </Route>
            <Route path="products/:category">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<ProductId />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
