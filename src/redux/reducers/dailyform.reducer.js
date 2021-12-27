const formReducer = (state = {}, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_FORM':
      return action.payload;
    case 'UNSET_FORM':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default formReducer;
