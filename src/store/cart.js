let initialState = {
    cart: [],
    show: false,
    count: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
       let cart=[...state.cart,payload]
        return { cart:cart , show: state.show, count: state.count +1};
  
      case "DELETE":
        console.log(payload);
        const product = state.cart.filter((item,idx)=> idx!==payload.idx)
        return { cart: product, show: state.show, count: state.count -1 };
  
        case "SHOW":

        return {cart:state.cart,show:payload,count:state.count}
      default:
        return state;
    }
  };
  
  export default cartReducer;