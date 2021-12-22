const initailState = {
  categories: [
    {
      name: "FOOD",
      displayName: "Food",
      description: "“Life is uncertain. Eat dessert first.”",
    },
    {
      name: "ELECTRONICS",
      displayName: "Electronics",
      description: "“Electronics is clearly the winner of the day.”",
    },
  ],
  activeCategory: "",
};

const categoriesReducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ACTIVE":
      let categories = state.categories;
      let active = payload;
      console.log("acteee",active);

      return { categories, activeCategory: active,};

    case "RESET":
      return initailState;
    default:
      return state;
  }
};

export const activatedCategory = (name) => {
  return {
    type: "ACTIVE",
    payload: name,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export default categoriesReducer;
