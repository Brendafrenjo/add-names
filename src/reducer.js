const initialState = {
  names: [],
};

function namesReminder(state = initialState, action) {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, action.payload],
      };
  }
}
