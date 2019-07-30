import React from "react";
import { connect } from "react-redux";

import styles from "./History.module.css";

const History = props => {
  return (
    <div>
      <h2 className={styles.Title}>History</h2>
      <div className={styles.Line} />
      <div>
        {props.timeList.map(e => (
          <div key={e.date} className={styles.Row}>
            <div className={styles.Cell}>{e.duration}s - </div>
            <div className={styles.Cell}>{e.date.toString().slice(0, 24)}</div>
            <div className={styles.Line} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  timeList: state.history
});

export default connect(
  mapStateToProps,
  null
)(History);
