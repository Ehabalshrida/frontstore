import axios from "axios";

const api='https://api-server-0.herokuapp.com/products'
export const getData=()=>async (dispatch,state)=>{

let res =await axios.get(api)
dispatch(getProduct(res.data))
}
// export const deletetData=()=>async (dispatch,state)=>{

// let res =await axios.delete(`${api}`)
// dispatch(deleteProduct(res.data,idx))
// }




export const addProduct = (product) => {
    return {
      type: "ADD",
      payload: product,
    };
  };
export const getProduct = (allProduct) => {
    return {
      type: "GET",
      payload: allProduct,
    };
  };
  
  export const deleteProduct = (product,idx) => {
    return {
      type: "DELETE",
      payload: {
        product:product,
        idx:idx
      },
    };
  };
  
  export const showCart = (status) => {
    return {
      type: "SHOW",
      payload: status
    };
  };
  
  export const inventoryAction = (product) => {
    return {
      type: "ADDPRODUCT",
      payload: product,
    };
  };