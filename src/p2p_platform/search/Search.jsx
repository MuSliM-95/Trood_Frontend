import styles from "./search.module.css";

const Search = ({ text, handleChange }) => {
  return (
    <div className={styles.cearcgConteyner}>
      <input
        className={styles.input_Value}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
