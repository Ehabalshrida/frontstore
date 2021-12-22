let initialState = {
  cart: [],
  show: false,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const products = state.cart.map((product) => product.name);
      
        let counts = state.count + 1;
        return { cart: [...state.cart, payload], show: true, count: counts };
      

    case "DELETE":
      const product = state.cart.filter((product,idx) => {
        return idx !== payload.idx;
      });
      let count = state.count - 1;
      return { cart: product, show:state.show, count: count };

      case "SHOW":
        return {cart:state.cart,show:payload,count:state.count}
    default:
      return state;
  }
};

export default cartReducer;
