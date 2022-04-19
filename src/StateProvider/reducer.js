// define the initialState
export const initialState = {
  buttonInput: [],
  firstLineStatus: ["", "", "", "", "", "", "", "", "", ""],
  secondLineStatus: ["", "", "", "", "", "", "", "", ""],
  thirdLineStatus: ["Enter", "", "", "", "", "", "", "", "Backspace"],
  winningStatus: false,
  noWordStatus: [""],
};

// referance keyboard layout
const firstLine = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdLine = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return { ...state, buttonInput: [...state.buttonInput, action.item] };

    case "CLEAR_LIST":
      return { ...state, buttonInput: [] };

    case "ADD_TO_STATUS":
      const key = action.item.key;
      const color = action.item.color;
      if (firstLine.includes(key)) {
        const newFirstLineStatus = [...state.firstLineStatus];
        const index = firstLine.indexOf(key);
        newFirstLineStatus[index] = color;
        return { ...state, firstLineStatus: [...newFirstLineStatus] };
      } else if (secondLine.includes(key)) {
        const newSecondLineStatus = [...state.secondLineStatus];
        const index = secondLine.indexOf(key);
        newSecondLineStatus[index] = color;
        return { ...state, secondLineStatus: [...newSecondLineStatus] };
      } else if (thirdLine.includes(key)) {
        const newThirdLineStatus = [...state.thirdLineStatus];
        const index = thirdLine.indexOf(key);
        newThirdLineStatus[index] = color;
        return { ...state, thirdLineStatus: [...newThirdLineStatus] };
      }
      return { ...state };

    case "WINNING_STATUS":
      return { ...state, winningStatus: true };

    case "NOWORD_STATUS":
      const temp = [...state.noWordStatus];
      temp.push(true);
      return { ...state, noWordStatus: [...temp] };

    case "RESET_NOWORD_STATUS":
      const temp2 = [...state.noWordStatus];
      if (temp2.length > 0) {
        temp2.pop();
        return { ...state, noWordStatus: [...temp2] };
      } else {
        return { ...state, noWordStatus: [""] };
      }

    default:
      return { state };
  }
};

export default reducer;
