import React, { createContext, useContext, useReducer } from "react";

// Create Data Layer to make props accessable in every components
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// This defines how we use the data layer in a component
export const useStateValue = () => useContext(StateContext);
