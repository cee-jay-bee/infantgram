const childReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHILD':
      return action.payload;
    case 'UNSET_CHILD':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default childReducer;
