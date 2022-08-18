import "./Cart.css";
import { plus, minus, trash } from "../../icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../../redux/APIuser";
const KEY =
  "pk_test_51LOGjFKTe3edRc5tHC3nfOB54Bv00g13H14VoKoHNZBfYA7Aq05LBXtbFjtJu8RN25iMaKJ3NNndaFOM67WKudDq003k7yBPrJ";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const ongkir = cart.products.length > 0 ? 24000 : 0;
  const discount = cart.products.length > 0 ? 14000 : 0;

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 150,
        });
        console.log(response.data);
        navigate("/");
        alert("Payment Succes");
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  const removeProductItem = (id) => {
    deleteCart(dispatch, id);
  };
  const subTotal = cart.products.reduce((a, c) => a + c.quantity * c.price, 0);
  const total = subTotal + ongkir - discount;
  return (
    <>
      <Header />
      <div className="containerCart">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <Link to="/product">
            <button className="topButton">CONTINUE SHOPPING</button>
          </Link>
          <div className="topTexts">
            <span className="toptext">Shopping bag(2)</span>
            <span className="toptext">Your Whislist(0)</span>
          </div>
          <button className="topButton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((item) => (
              <>
                <hr style={{ width: "75%", marginBottom: "20px" }} />

                <div className="product">
                  <div className="productDetail">
                    <img src={item.img} alt="" className="image" />
                    <div className="details">
                      <span className="productName">
                        <b>Product:</b> {item.title}
                      </span>
                      <span className="productId">
                        <b>ProductId:</b> {item.productID}
                      </span>
                      <span className="productColor">
                        <b>Color: </b> {item.color}
                      </span>
                      <span className="productSize">
                        <b>Size:</b> {item.size}
                      </span>
                      <span className="productPrice">
                        <b>Price:</b> Rp
                        {(item.price * item.quantity).toLocaleString()},00
                      </span>
                      <div className="priceDetail">
                        <div className="productAmountContainer">
                          <img
                            src={minus}
                            alt="search"
                            width={25}
                            height={25}
                          />
                          <div className="productAmount">{item.quantity}</div>
                          <img src={plus} alt="search" width={25} height={25} />
                        </div>
                        <div onClick={() => removeProductItem(item._id)}>
                          <img
                            src={trash}
                            alt="search"
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">
                {" "}
                Sub Total ({cart.products.reduce((a, c) => a + c.quantity, 0)})
              </span>
              <span className="summaryItemPrice">
                Rp {cart.products.reduce((a, c) => a + c.quantity * c.price, 0)}
                ,00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText"> Estimated Shipping</span>
              <span className="summaryItemPrice">
                Rp {ongkir.toLocaleString()},00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">
                - Rp {discount.toLocaleString()},00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">
                Rp {total.toLocaleString()},00
              </span>
            </div>
            <StripeCheckout
              name="Monja Collection"
              image="https://i.ibb.co/4dmvB52/key-hole.png"
              billingAddress
              shippingAddress
              description={`Your Total : Rp ${(
                cart.total +
                ongkir -
                discount
              ).toLocaleString()},00`}
              amount={(cart.total / 15000) * 100}
              token={onToken}
              stripeKey={KEY}>
              <button className="buttonCart">CHECKOUT NOW </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
