const initailState={
    categories:[
      { name: "FOOD", displayName:"Food",description: "“Life is uncertain. Eat dessert first.”" },
      {
        name: "ELECTRONICS",
        displayName:"Electronics",
        description: "“Electronics is clearly the winner of the day.”",
      },
    ],
    activeCategory: "",
  }
  
  
  const categoriesReducer=(state=initailState,action)=>{
    const {type,payload}=action;
    switch (type) {
      case "ACTIVE":
        let active=payload;
        let categories = state.categories.map((category) => {
                  if (category.name === payload) {
                    return { name: category.name, description: category.description };
                  }
                  return category;
                });
        return {active,categories}
  
      case "RESET":
        return initailState;  
      default:
        return state;
    }
  }
  
  
  export const choosenCat=(name)=>{
      return {
      type: "ACTIVE",
      payload: name,
    };
  }
  
  export const reset=()=>{
    return{
      type:"RESET"
    }
  }
  
  export default categoriesReducer;