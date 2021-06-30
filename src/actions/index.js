export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const LOGOUT = "LOGOUT";

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  localStorage.setItem("userID", username);
  setTimeout(() => {
    dispatch({ type: AUTH_SUCCESS, payload: { data: { _id: "1234" } } });
  }, 1000);
};

export const removeItem = (itemType, id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      itemType,
      id,
    },
  };
};

export const logOut = () => {
  localStorage.removeItem("userID");
  return {
    type: "LOGOUT",
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: "ADD_ITEM",
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
