import React, { createContext, useReducer } from "react";
import DbReducer from "../Reducers/DbReducer";

const initialState = {
  db: [],
};

export const DbContext = createContext(initialState);
export const DbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DbReducer, initialState);

  const getAll = (data) => {
    dispatch({ type: "GET_ALL", payload: data });
  };

  const getOne = (id) => {
    dispatch({ type: "ADD_ONE", payload: id });
  };

  return (
    <DbContext.Provider value={{ db: state.db, getAll, getOne }}>
      {children}
    </DbContext.Provider>
  );
};
