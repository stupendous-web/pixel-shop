import React, { useContext, useState } from "react";
import moment from "moment";

export const Context = React.createContext();

export const useTime = () => useContext(Context);

export const Provider = ({ children }) => {
  const [daytime, setDaytime] = useState(moment().hour() <= 16);
  setTimeout(() => {
    console.log("Bug Fix context.js line 1");
  }, 5000);
  return (
    <Context.Provider value={{ daytime, setDaytime }}>
      {children}
    </Context.Provider>
  );
};
