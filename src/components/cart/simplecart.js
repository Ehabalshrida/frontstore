import React from "react";
import { If } from "react-if";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/cart";
import { Button } from "@material-ui/core";

const SimpleCart = (props) => {
    return (
      <>
        <section className="simplecart-conitaner">
          <If condition={() => props.cart.length !== 0}>
            <ui>
              {props.cart.map((el, idx) => {
                console.log('elelmntr',el);
                return (
                  <li key={idx}>
                    <span>{el.name}</span>
                    <span>{el.truecount}</span>
                    {/* <span>{el.count}</span> */}
                    <Button
                      color="secondary"
                      onClick={() => {
                        props.deleteProduct(el);
                      }}
                    >
                      Delete
                    </Button>
                  </li>
                );
              })}
            </ui>
          </If>
        </section>
      </>
    );
  };
  
  const mapStateToprops = (state) => {
    console.log('cart-->',state);
    return { cart: state.cartReducer.cart,};
  };
  const mapDispatchToProps = { deleteProduct };
  
  export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);