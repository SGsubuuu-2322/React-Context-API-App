// import React from 'react'

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/Context";

const UserDetails = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const { id } = useParams();
  // console.log(users[id]);
  return (
    <div>
      <h1>Hey!!! {users[id].name}</h1>
      <h1>Your city is: {users[id].city}</h1>
      <h1>Your age is: {users[id].age}</h1>

      <button
        onClick={() => navigate(-1)}
        className="px-2 py-1 mt-5 rounded bg-red-400"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetails;
