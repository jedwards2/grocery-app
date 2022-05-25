const ADD_TO_CART = "cart/ADD";
const REMOVE_FROM_CART = "cart/REMOVE";

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newObj = {};
      newObj = { ...state };
      newObj[action.id] = { id: action.id, count: 1 };
      return newObj;
    case REMOVE_FROM_CART:
      let newObj2 = {};
      newObj2 = { ...state };
      delete newObj2[action.id];
      return newObj2;
    default:
      return state;
  }
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export default cartReducer;
