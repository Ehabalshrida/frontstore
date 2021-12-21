import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions";
import { Button } from "@material-ui/core";

const SimpleCart = (props) => {
  console.log(props.cart);
  return (
    <>
    <div style={{position:"absolute", right:"20px"}}>

    
      <section >
       
          <ui>
            { props.cart.show&&
            props.cart.cart.map((item, idx) => {
              return (
                <li key={idx}>
                  <span>{item.item}</span>
                  <Button
                    color="secondary"
                    onClick={() => {
                      props.deleteProduct(item,idx);
                    }}
                  >
                   
                    Delete 
                  </Button>
                </li>
              );
            })}
          </ui>
    
      </section>
      </div>
    </>
  );
};

const mapStateToprops = (state) => {
  return { cart: state.cartReducer };
};
const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToprops, mapDispatchToProps)(SimpleCart);