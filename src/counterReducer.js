const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "ADD-TEN":
      return state + 10;
    case "RESET":
      return (state = 0);
    case "REMOVE":
      return state - 1;
    case "REMOVE-TEN":
      return state - 10;
    default:
      return state;
  }
};

export default counterReducer;
