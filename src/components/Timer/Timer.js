import React from "react";

import { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as constants from "./../../constants/constants";

import { calculateInterval } from "./../../utils/utils";

import {
  startTimer,
  pauseContinueTimer,
  stopTimer
} from "../../store/actions/index";

import styles from "./Timer.module.css";

const Timer = props => {
  const [elapse, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const fst = props.actualTime;
      const snd = new Date().getTime();

      if (props.status === constants.INITIAL) {
        setElapsed(0);
      } else if (props.status === constants.STARTED) {
        setElapsed(calculateDiff(fst, snd));
      } else if (props.status === constants.PAUSED) {
        setElapsed(props.some.storedTime);
      } else if (props.status === constants.RESUMED) {
        setElapsed(props.some.storedTime + calculateDiff(fst, snd));
      }
    }, 100);
    return () => clearInterval(interval);
  }, [props]);

  const calculateDiff = (fst, snd) => calculateInterval(fst, snd);

  const handleStart = () => {
    props.status === "INITIAL"
      ? props.startTimer()
      : props.pauseContinueTimer();
  };

  const handleStop = () => {
    props.stopTimer(elapse.toFixed(1));
  };

  let buttonText =
    props.status === constants.INITIAL
      ? "Play"
      : props.status === constants.PAUSED
      ? "Resume"
      : "Pause";

  const button = (
    <button className={styles.Button} onClick={handleStart}>
      {buttonText}
    </button>
  );

  return (
    <div>
      <div className={styles.Timer}>
        <span>Timer-t !</span>
      </div>
      <div>
        <div className={styles.Mine}>
          <div>
            {button}
            <button
              disabled={props.status === constants.INITIAL}
              className={styles.Button}
              onClick={handleStop}
            >
              Stop
            </button>
            <br />
            <br />
            <br />
            <div>
              <div className={styles.ldsdualring} />
            </div>
            <h2>{elapse.toFixed(1)}s</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  some: state.timer,
  actualTime: state.timer.initialTime,
  status: state.timer.status
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  pauseContinueTimer: () => dispatch(pauseContinueTimer()),
  stopTimer: totalTime => dispatch(stopTimer(totalTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
