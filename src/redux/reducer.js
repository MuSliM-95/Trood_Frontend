const initialState = {
  token: [],
  error: null,
  loading: true,
  tokenKopi: [],
};

export const criptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        token: [...state.token, ...action.payload],
        loading: false,

        tokenKopi: [...state.token, ...action.payload],
      };
    case "FILTER_STATUS":
      return {
        ...state,
        token: [
          ...state.token.filter((el) => el.status === action.payload.status),
        ],
      };

    case "UPDATE_FILTER":
      return {
        ...state,

        token: [...state.token, ...(state.token = [])],
        token: [...state.token, ...state.tokenKopi],
      };
    case "BUY":
      return {
        ...state,
        token: [
          ...state.token.map((el) => {
            if (el.id === action.payload) {
              el.freeFloat -= 1;
              return el;
            }
            return el;
          }),
        ],
      };

    default:
      return state;
  }
};

export const readAsyncTocen = (payload) => {
  return { type: "GET_TOKEN", payload };
};

export const filterRead = (payload) => {
  return { type: "FILTER_STATUS", payload };
};

export const updateFilter = (payload) => {
  return { type: "UPDATE_FILTER", payload };
};

export const updateBuy = (payload) => {
  return { type: "BUY", payload };
};
