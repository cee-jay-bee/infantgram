const formReducer = (state = 
    {wakeup: null,
      breakfast: null,
      breakfast_food: null,
      parent_comments: null,
      diaper_change_time: null,
      pickup_time: null,
      bottle_time: null, 
      bottle_amount: null,
      nap_start: null,
      nap_end: null,
      diaper_time: null, 
      diaper_kind: null,
      teacher_comments: null,
      feeding_time: null,
      feeding_food: null,
      needs_diapers: null,
      needs_wipes: null,
      needs_cream: null,
      needs_formula: null,
      needs_food: null,
      needs_clothes: null}, action) => {
        switch (action.type) {
          case 'SET_FORM':
          if (action.payload.length === 0) {
            return state;
          } else {
            return action.payload[0];
          }
          case 'UNSET_FORM':
            return {wakeup: null,
              breakfast: null,
              breakfast_food: null,
              parent_comments: null,
              diaper_change_time: null,
              pickup_time: null,
              bottle_time: null, 
              bottle_amount: null,
              nap_start: null,
              nap_end: null,
              diaper_time: null, 
              diaper_kind: null,
              teacher_comments: null,
              feeding_time: null,
              feeding_food: null,
              needs_diapers: null,
              needs_wipes: null,
              needs_cream: null,
              needs_formula: null,
              needs_food: null,
              needs_clothes: null};
          default:
            return state;
  }
};

// user will be on the redux state at:
// state.user
export default formReducer;
