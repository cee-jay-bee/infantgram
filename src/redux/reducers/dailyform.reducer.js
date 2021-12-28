const formReducer = (state = 
    [{wakeup: null,
    breakfast: null,
    breakfast_food: null,
    parent_comments: null,
    diaper_change_time: null,
    pickup_time: null,
    bottles: null,
    naps: null,
    diapers: null,
    needs: null,
    feelings: null,
    teacher_comments: null,
    feeding_information: null}], action) => {
        console.log(action.payload);
        switch (action.type) {
          case 'SET_FORM':
          if (action.payload.length === 0) {
            return state;
          } else {
            return action.payload;
          }
          case 'UNSET_FORM':
            return [{wakeup: null,
              breakfast: null,
              breakfast_food: null,
              parent_comments: null,
              diaper_change_time: null,
              pickup_time: null,
              bottles: null,
              naps: null,
              diapers: null,
              needs: null,
              feelings: null,
              teacher_comments: null,
              feeding_information: null}];
          default:
            return state;
  }
};

// user will be on the redux state at:
// state.user
export default formReducer;
