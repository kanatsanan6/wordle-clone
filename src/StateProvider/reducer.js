// define the initialState
export const initialState = {
  buttonInput: [],
};

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return { ...state, buttonInput: [...state.buttonInput, action.item] };

    case "CLEAR_LIST":
      return { ...state, buttonInput: [] };

    default:
      return { state };
  }
};

export default reducer;
