
let initialState = {
  categories: [
    {
      normalizedName: "FOOD",
      displayName: "FOOD",
      description: "you can find all food you want",
    },
    {
      normalizedName: "ELECTRONICS",
      displayName: "ELECTRONICS",
      description: "this is a collection of electronics products",
    },
    {
      normalizedName: "men's clothing",
      displayName: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
  ],
  activeCategory: "",
};

const ReduceCategory = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(action);
  switch (type) {
    case "ACTIVE":
        let active=state.categories.filter(item=>{
            return payload===item.normalizedName? item.normalizedName:""
        })
        
      let activeCategory = {
        normalizedName:active[0].normalizedName,
        displayName:active[0].displayName,
        description:active[0].description
      };
      
      let categories = state.categories;

      return { activeCategory, categories };
    default:
      return state;
  }
};

//actions
export const selectCate = (name) => {
  return {
    type: "ACTIVE",
    payload: name,
  };
};


export default ReduceCategory;
