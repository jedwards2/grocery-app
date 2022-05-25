const ADD_TO_CART = "cart/ADD";
const REMOVE_FROM_CART = "cart/REMOVE";
const INCREMENT_ITEM = "cart/INCREMENT";
const DECREMENT_ITEM = "cart/DECREMENT";

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
    case INCREMENT_ITEM:
      let newObj3 = {};
      newObj3 = { ...state };
      let prevCount = newObj3[action.id].count;
      newObj3[action.id] = { id: action.id, count: prevCount + 1 };
      return newObj3;
    case DECREMENT_ITEM:
      let newObj4 = {};
      newObj4 = { ...state };
      let prevCount2 = newObj4[action.id].count - 1;
      if (prevCount2 <= 0) {
        delete newObj4[action.id];
      } else {
        newObj4[action.id] = { id: action.id, count: prevCount2 - 1 };
      }
      return newObj4;
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

export const incrementItem = (id) => {
  return {
    type: INCREMENT_ITEM,
    id,
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT_ITEM,
    id,
  };
};

export default cartReducer;
