import styles from "./p2p_platforms.module.css";
import logo from "../images/icons1.png";
import logo2 from "../images/icons2.png";
import logo3 from "../images/icons3.png";
import React, { useState } from "react";
import Tokens from "./token.map/Tokens";
import Status from "./filtarStatus/Status";
import Search from "./search/Search";
import { useSelector } from "react-redux";

const P2P_platforms = () => {
  const [tokenFilter, setTokenFilter] = useState(false);
  const [nameTokenFilter, setNameTokenFilter] = useState(false);
  const token = useSelector((state) => state.token);
  const [text, setText] = useState("");

  const hendleStatusDiv = () => {
    setTokenFilter(!tokenFilter);
  };

  const handleSearch = () => {
    setNameTokenFilter(!nameTokenFilter);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const searchToken = token.filter(
    (el) => el.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
  );

  return (
    <div className={styles.tableConteyner}>
      <table>
        <thead>
          <tr className={styles.header}>
            <th>
              <div className={styles.header_blokc}>
                <img
                  onClick={hendleStatusDiv}
                  className={styles.arrow_to_down}
                  src={logo}
                  alt="logo"
                />
                {tokenFilter && (
                  <div className={styles.status_windows}>
                    <Status />
                  </div>
                )}
                <p className={styles.all}>All</p>
                <p>Project</p>
                <p className={styles.arrow}>
                  <img
                    className={styles.arrow_down_and_up}
                    src={logo2}
                    alt="logo"
                  />
                  <img
                    className={styles.arrow_down_and_up}
                    src={logo3}
                    alt="logo"
                  />
                </p>
              </div>
            </th>
            <th>
              <div className={styles.header_blokc}>
                <img
                  onClick={handleSearch}
                  className={styles.arrow_to_down}
                  src={logo}
                  alt="logo"
                />
                <p className={styles.all}>All</p>
                <p>Token type</p>
                {nameTokenFilter && (
                  <div className={styles.searchCompanent}>
                    <Search text={text} handleChange={handleChange} />
                  </div>
                )}
              </div>
            </th>
            <th>
              <div className={styles.header_blokc}>
                <p>Conditions</p>
              </div>
            </th>
            <th>
              <div className={styles.header_blokc}>
                <p>Volume</p>
                <p className={styles.arrow}>
                  <img
                    className={styles.arrow_down_and_up}
                    src={logo2}
                    alt="logo"
                  />
                  <img
                    className={styles.arrow_down_and_up}
                    src={logo3}
                    alt="logo"
                  />
                </p>
              </div>
            </th>

            <th>
              <div className={styles.header_blokc}>
                <p>ROI</p>
              </div>
            </th>
            <th>
              <div className={styles.header_blokc}>
                <p>Free float</p>
              </div>
            </th>
            <th>
              <div className={styles.header_blokc}>
                <p>Insurance hedge</p>
              </div>
            </th>
          </tr>
        </thead>
        <Tokens searchToken={searchToken} />
      </table>
    </div>
  );
};

export default P2P_platforms;
