export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to put item into basket
      return {
        ...state,
        basket: [...state.basket, action.item], 
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);       
      } else {
        console.warn(`Cannot remove product (id: ${action.id}))`)
        }


      return {
        ...state,
        basket: newBasket,
      };
 
    default:
      return state;
  }
}

export default reducer;
