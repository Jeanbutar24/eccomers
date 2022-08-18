import axios from "axios";
import { publicRequest, userRequest } from "../requestMethods";
import { addProducts, removeProduct } from "./CartSlice";
import { loginFailure, loginStart, loginSucces } from "./UserSlice";
import {
  productGetStart,
  productGetError,
  productGetSucces,
} from "./ProductSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "https://monjajean.herokuapp.com/api/auth/login",
      user
    );
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const product = async (dispatch) => {
  dispatch(productGetStart());
  try {
    const response = await publicRequest.get("/product");
    dispatch(productGetSucces(response.data));
  } catch (error) {
    dispatch(productGetError(error));
  }
};

export const postCart = async (dispatch, productId) => {
  try {
    const response = await userRequest.post("/cart/addProduct", productId);
    dispatch(addProducts(response.data));
  } catch (error) {}
};
export const deleteCart = async (dispatch, id) => {
  try {
    await userRequest.delete(`/cart/${id}`, id);
    dispatch(removeProduct(id));
  } catch (error) {}
};
