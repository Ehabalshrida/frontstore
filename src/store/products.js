/* eslint-disable no-unused-expressions */
let initialState = {
  products: [
    {
      category: "ELECTRONICS",
      name: "Arduino Kit",
      description: "for building Arduino projects",
      price: "35$",
      inventory: 3,
      img: "https://5.imimg.com/data5/MU/LM/MY-9380557/arduino-uno-starter-kit-500x500.jpg",
    },
    {
      category: "ELECTRONICS",
      name: "Stepper Motor",
      description: "good for light weight loads",
      price: "10$",
      inventory: 7,
      img: "https://www.motioncontroltips.com/wp-content/uploads/2019/06/Nanotec-SCA5618_Web.jpeg",
    },
    {
      category: "FOOD",
      name: "Mansaf",
      description: "good to correct your mood LoL..",
      price: "20$",
      inventory: 3,
      img: "http://migrationology.smugmug.com/Jordan-Travel-Guide/i-8xVPrHQ/0/X3/mansaf-jordanian-food-19-X3.jpg",
    },

    {
      category: "FOOD",
      name: "Zait & Zaater",
      description: "best food for healthy people",
      price: "3$",
      inventory: 12,
      img: "https://2.bp.blogspot.com/-N-OmV9Wi5sM/XK70kcYjAQI/AAAAAAACSzQ/j1bHjkBmvrwwZvmDPRXb2hBG0vDukEwpACLcBGAs/s1600/01.JPG",
    },
  ],
  activeProduct:[]
};

const ReduceProducts = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
     state.activeProduct=state.products.filter(item=>{
       return (payload.toLowerCase()===item.category ? item.category:null)
     })
     console.log(state.activeProduct);
      return state;


      case "GET":

        state.products=payload
        return state
    case "ADDPRODUCT":
      state.activeProduct = state.activeProduct.map((product) => {
        if (product.name === payload.name) {
          if (product.inventoryCount > 0) {
            product.inventoryCount = product.inventoryCount - 1;
          }
          return product;
        }
        return product;
      });
      return {...state};

    case "DELETE":
      state.activeProduct = state.activeProduct.map((product) => {
        if (product.name === payload.product.name) {
          product.inventoryCount = product.inventoryCount + 1;

          return product;
        }
        return product;
      });
      return {...state};

    default:
      return state;
  }
};

export default ReduceProducts;
