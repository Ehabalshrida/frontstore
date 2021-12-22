import mansaf from "../Images/jordanian-mansaf.jpg";
import iphone13 from "../Images/Iphone13.jpg";
import pizza from "../Images/pizza.jpg";
import macBook from "../Images/macBook.jpg";
import AppleWatch from "../Images/AppleWatch.jpg";
import AppleTV from "../Images/AppleTV.jpg";
let initailState = {
  products: [
    {
      category: "FOOD",
      name: "Mansaf",
      description: "Traditional Jordanian recipe",
      ingredients: "meat/rice/laban rayeb/nuts/jameed",
      price: 8.99,
      inventory: 5,
      img: mansaf,
    },
    {
      category: "FOOD",
      name: "Pizza",
      description: "Pepperoni Pizza",
      ingredients:
        "cured pork and beef seasoned with paprika or other chili pepper",
      price: 10.99,
      inventory: 5,
      img: pizza,
    },
    {
      category: "ELECTRONICS",
      name: "Iphone 13 pro max",
      description: "Apple's newest flagship iPhones",
      ingredients:
        "6.7” / Sierra Blue, Silver, Gold, and Graphite / water resistance2",
      price: 1500,
      inventory: 10,
      img: iphone13,
    },
    {
      category: "ELECTRONICS",
      name: "MacBook Air 13 inc",
      description: "Apple",
      ingredients:
        "M1 chip with 8-core CPU and 7-core GPU, 8GB, 256GB, English/Arabic 2020",
      price: 1700,
      inventory: 15,
      img: macBook,
    },
    {
      category: "ELECTRONICS",
      name: "AppleWatch",
      description: "Gold Aluminum Case with Sport Band",
      ingredients: "Band fits 140–210mm wrists.",
      price: 200,
      inventory: 10,
      img: AppleWatch,
    },
    {
      category: "ELECTRONICS",
      name: "AppleTV",
      description: "Apple TV 4K has movies",
      ingredients:
        "shows, live TV and sports, and gaming — in 4K High Frame Rate HDR. Get Apple TV+ free for 1 year. Free, no-contact delivery.",
      price: 150,
      inventory: 20,
      img: AppleTV,
    },
  ],
};

const productsReducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      let prodect = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, prodect: prodect };

    case "ADDPRODUCT":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.inventory > 0) {
            product.inventory = product.inventory - 1;
          }
          return product;
        }
        return product;
      });
      return { ...state };

    case "DELETE":
      state.products = state.products.map((product) => {
        if (product.name === payload.product.name) {
          product.inventory = product.inventory + 1;

          return product;
        }
        return product;
      });
      return { ...state };

    case "VIEW":
      let data = payload;
      localStorage.setItem("item",JSON.stringify(data));
      return  data ;
    default:
      return state;
  }
};

export default productsReducer;
