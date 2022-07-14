import React, { useContext, useState } from "react";

export const Context = React.createContext();

export const useTime = () => useContext(Context);

export const Provider = ({ children }) => {
  const [daytime, setDaytime] = useState(true);
  return (
    <Context.Provider value={{ daytime, setDaytime }}>
      {children}
    </Context.Provider>
  );
};
