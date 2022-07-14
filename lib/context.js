import React, { useContext, useState } from "react";
import moment from "moment";

export const Context = React.createContext();

export const useTime = () => useContext(Context);

export const Provider = ({ children }) => {
  const hour = moment().hour() <= 16;
  const [daytime, setDaytime] = useState(hour);
  return (
    <Context.Provider value={{ daytime, setDaytime }}>
      {children}
    </Context.Provider>
  );
};
