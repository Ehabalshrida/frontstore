export const activatedCategory = (name) => {
  return {
    type: "ACTIVE",
    payload: name=="FOOD"||name=="ELECTRONICS"?name:"ALL",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const addProduct = (product) => {
  console.log(product);
  return {
    type: "ADD",
    payload: product,
  };
};

export const deleteProduct = (product, idx) => {
  return {
    type: "DELETE",
    payload: { product: product, idx: idx },
  };
};

export const showCart = (status) => {
  return {
    type: "SHOW",
    payload: status,
  };
};

export const inventoryAction = (product) => {
  return {
    type: "ADDPRODUCT",
    payload: product,
  };
};

export const getCart = (data) => {
  return {
    type: "GETCART",
    payload: data,
  };
};

export const productDetails = (data) => {
  return {
    type: "VIEW",
    payload: data,
  };
};