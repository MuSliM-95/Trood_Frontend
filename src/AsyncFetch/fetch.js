import { filterRead, readAsyncTocen } from "../redux/reducer";

export const fetchToken = () => {
  return async (dispatch) => {
    fetch("http://localhost:4000/tokens")
      .then((res) => res.json())
      .then((data) => dispatch(readAsyncTocen(data)))
      .catch((data) => dispatch(readAsyncTocen(data)));
  };
};
