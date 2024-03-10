// import React from 'react'

import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";

// import UserDetails from "./UserDetails";

const User = () => {
  const { users, setUsers } = useContext(UserContext);
  return (
    <div className="w-1/2 flex flex-col m-auto text-center mt-4">
      <h1>User List: </h1>

      <div className="flex flex-col w-full items-center">
        {users.map((item, index) => (
          <Link
            key={index}
            to={`/user/${item.id}`}
            className="text-2xl font-semibold bg-red-100 mb-2 w-1/4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
