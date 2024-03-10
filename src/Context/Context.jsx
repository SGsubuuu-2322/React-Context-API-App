// import React from 'react'

import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, name: "Subham", age: "21", city: "BBSR" },
    { id: 1, name: "Biderohi", age: "20", city: "KDP" },
    { id: 2, name: "Gyanendra", age: "23", city: "PRDP" },
  ]);
  // console.log(props);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
