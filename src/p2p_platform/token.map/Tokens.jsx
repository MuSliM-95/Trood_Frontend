import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./token.module.css";
import { fetchToken } from "../../AsyncFetch/fetch";
import yellow from "../../images/icons4.png";
import green from "../../images/icons5.png";
import red from "../../images/icons6.png";
import { updateBuy } from "../../redux/reducer";

const Tokens = (searchToken) => {
  const token = useSelector((state) => state.token);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  if (loading) {
    return "...loading";
  }

  if (error) {
    return error.message;
  }
  console.log(token);
  const handleBuy = (id, freeFloat) => {
    if (freeFloat > 0) {
      return dispatch(updateBuy(id));
    }
  };

  return (
    <tbody>
      {searchToken.searchToken.map((el) => {
        return (
          <tr
            key={el.id}
            className={el.status === "green" ? styles.bloc_1 : styles.bloc_2}
          >
            <td>
              <img
                className={styles.image}
                src={
                  (el.status === "green" && green) ||
                  (el.status === "yellow" && yellow) ||
                  (el.status === "red" && red)
                }
                alt=""
              />{" "}
              {el.project}
            </td>
            <td> {el.name}</td>
            <td>{el.conditions}</td>
            <td>{el.volume}</td>
            <td>{el.ROI} %</td>
            <td>{el.freeFloat}</td>
            <td>{el.insuranceHedge} %</td>
            <td>
              <button
                onClick={() => handleBuy(el.id, el.freeFloat)}
                className={el.freeFloat < 1 ? styles.sold : styles.bey}
                disabled={el.freeFloat < 1}
              >
                {el.freeFloat < 1 ? "Sold" : "Buy"}
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tokens;
