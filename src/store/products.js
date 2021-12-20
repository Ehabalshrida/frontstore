let initailState = {
  products: [
    {
      category: "FOOD",
      name: "Mansaf",
      description: "Traditional Jordanian recipe",
      ingredients: "meat/rice/laban rayeb/nuts/jameed",
      price: 8.99,
      inventory: 5,
      trucount: 0,
      img: "https://turkishstylecooking.com/wp-content/uploads/2021/03/mansaf3.jpg"
    },
    {
      category: "ELECTRONICS",
      name: "ipad pro",
      description: "Apple's newest flagship iPhones",
      ingredients:
        "6.7” / Sierra Blue, Silver, Gold, and Graphite / water resistance2",
      price: 1500,
      inventory: 10,
      img: "https://helios-i.mashable.com/imagery/reviews/05bgrc5wkSIBJAeauf9dF3t/hero-image.fill.size_1248x702.v1623389314.jpg"
    },
  ],
};

const productsReducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      console.log('jaja', state.products)
      let product = state.products.filter(product => {
        product.category == payload ? product.category : null
      })
      return { ...state, product: product };
    case "ADDPRODUCT":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.inventory > 0) {
            product.inventory = product.inventory - 1;
            product.trucount=initailState.inventory-product.inventory
          }
          return product;
        }
        return product;
      });
      return { ...state };
      case "DELETE":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          product.inventory = product.inventory + 1;

          return product;
        }
        return product;
      });
      return { ...state };
    case "RESET":
      return initailState;
    default:
      return state;
  }
}

export default productsReducer;



