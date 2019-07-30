import * as actionTypes from "./actionTypes";

export const startTimer = () => {
  return {
    type: actionTypes.START_TIMER,
    initialTime: new Date().getTime()
  };
};

export const stopTimer = elapseTime => {
  return {
    type: actionTypes.STOP_TIMER,
    date: new Date(),
    elapseTime: elapseTime
  };
};

export const resetAllTimers = () => {
  return {
    type: actionTypes.RESET_ALL_TIMERS
  };
};

export const pauseContinueTimer = () => {
  return {
    type: actionTypes.PAUSE_CONTINUE_TIMER,
    time: new Date().getTime()
  };
};
