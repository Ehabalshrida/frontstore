import React, { useEffect, useState } from "react";
import { If } from "react-if";
import SuperAgent from "superagent";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions";
import { Button } from "@material-ui/core";
import "../../style/simplecart.scss";
import { useSelector } from "react-redux";
import { showCart } from "../../store/actions";
const SimpleCart = (props) => {
  const [cartAPI, setCartAPI] = useState([]);
  useEffect(() => {
    async function getCart() {
      const data = await SuperAgent.get(
        "https://api-server-ps.herokuapp.com/cartItem"
      );
      setCartAPI(data.body);
    }
    getCart();
  }, []);

  async function deleteCart(idx) {
    try {
      console.log("delete");
      let res = await SuperAgent.delete(
        `https://api-server-ps.herokuapp.com/cartItem/${idx}`
      );
      const data = await SuperAgent.get(
        "https://api-server-ps.herokuapp.com/cartItem"
      );
      setCartAPI(data.body);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div className="cart-counter">
        <Button
          color={!props.cart.show ? "primary" : "secondary"}
          onClick={() => props.showCart(!props.cart.show)}
        >
          Cart:({cartAPI.length})
        </Button>
      </div>
      <section className="simplecart-conitaner">
        {props.cart.show && (
          <If condition={() => cartAPI.length !== 0}>
            <ui>
              {cartAPI.map((el, idx) => {
                return (
                  <li key={idx}>
                    <span>{el.name}</span>
                    <Button
                      color="secondary"
                      onClick={() => deleteCart(el._id)}
                    >
                      Delete
                    </Button>
                  </li>
                );
              })}
              <div>
                <a href="/cart">
                <Button color="secondary">CheckOut</Button>
                </a>
              </div>
            </ui>
          </If>
        )}
      </section>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cart };
};
const mapDispatchToProps = { deleteProduct, showCart };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);
