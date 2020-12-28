import React, { createContext, useReducer } from "react";
import DbReducer from "../Reducers/DbReducer";

const initialState = {
  wine: [],
  selection: {},
};

export const DbContext = createContext(initialState);
export const DbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DbReducer, initialState);

  const getAll = (data) => {
    dispatch({ type: "GET_ALL", payload: data });
  };

  const getOne = (data) => {
    dispatch({ type: "GET_ONE", payload: data });
  };

  return (
    <DbContext.Provider value={{ state, getAll, getOne }}>
      {children}
    </DbContext.Provider>
  );
};
