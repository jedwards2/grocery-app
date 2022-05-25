import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const TOGGLE = "produce/TOGGLE";

const produceReducer = (state = {}, action) => {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    case TOGGLE:
      let newState2 = {};
      newState2 = { ...state };
      let oldState = newState2[action.id].liked;
      newState2[action.id].liked = !oldState;
      return newState2;
    default:
      return state;
  }
};

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const toggleLikeButton = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

export default produceReducer;
