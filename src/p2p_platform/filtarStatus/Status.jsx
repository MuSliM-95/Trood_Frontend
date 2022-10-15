import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import yellow from "../../images/icons4.png";
import green from "../../images/icons5.png";
import red from "../../images/icons6.png";
import { filterRead, updateFilter } from "../../redux/reducer";
import styles from "./status.module.css";

const Status = () => {
  const token = useSelector((state) => state.tokenKopi);
  const [updateStatus, setUpdateStatus] = useState(false);
  const dispatch = useDispatch();

  const handleFilterStatus = (status) => {
    dispatch(filterRead(status));
    setUpdateStatus(!updateStatus);
  };

  const handleFilterStatusUpdate = () => {
    dispatch(updateFilter());
    setUpdateStatus(!updateStatus);
  };

  return (
    <div>
      {token.map((el) => {
        return (
          <div
            key={el.id}
            onClick={() =>
              updateStatus === true
                ? handleFilterStatusUpdate()
                : handleFilterStatus(el)
            }
            className={styles.status}
          >
            <img
              className={styles.image}
              src={
                (el.status === "green" && green) ||
                (el.status === "yellow" && yellow) ||
                (el.status === "red" && red)
              }
              alt="status_logo"
            />
            {el.status}
          </div>
        );
      })}
    </div>
  );
};

export default Status;
