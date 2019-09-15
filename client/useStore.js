import React, { useContext } from "react";
import { createStore } from "./FriendsStore";
import { useLocalStore } from "mobx-react-lite";

const storeContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error("No Store here.");
  }
  return store;
};