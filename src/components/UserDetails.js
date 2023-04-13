import React from "react";
import { useParams } from "react-router-dom";
import { database } from "./User";

function UserDetails() {
  const { name } = useParams();
  //console.log(database)
  return (
    <>
      <h1>This is {name} Page</h1>
    </>
  );
}

export default UserDetails;
