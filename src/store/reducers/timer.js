import * as actionTypes from "./../actions/actionTypes";
import * as constants from "./../../constants/constants";
import { calculateInterval } from "../../utils/utils";

const initialState = {
  initialTime: null,
  playing: false,
  status: constants.INITIAL,
  storedTime: 0
};

const pauseContinueTimer = (state, action) => {
  if (state.playing) {
    return {
      ...state,
      playing: false,
      status: constants.PAUSED,
      storedTime:
        state.storedTime + calculateInterval(state.initialTime, action.time),
      initialTime: null
    };
  } else {
    return {
      ...state,
      initialTime: action.time,
      playing: true,
      status: constants.RESUMED
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return {
        ...state,
        initialTime: action.initialTime,
        playing: true,
        status: constants.STARTED
      };
    case actionTypes.STOP_TIMER:
      return initialState;

    case actionTypes.RESET_ALL_TIMERS:
      return initialState;

    case actionTypes.PAUSE_CONTINUE_TIMER:
      return pauseContinueTimer(state, action);

    default:
      return state;
  }
};

export default reducer;
