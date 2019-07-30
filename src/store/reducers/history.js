import * as actionTypes from "./../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STOP_TIMER:
      return [...state, { date: action.date, duration: action.elapseTime }];
    case actionTypes.CLEAR_HISTORY:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
