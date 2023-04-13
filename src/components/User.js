import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
export const database = [
  {
    name: "anil",
    address: "abc",
    mobile: "99",
  },
  {
    name: "ram",
    address: "aa",
    mobile: "12743897123",
  },
  {
    name: "ramu",
    address: "adasdbc",
    mobile: "123689123",
  },
];
function User() {
  return (
    <>
      <h1>This is Users page</h1>
      {database.map((value) => {
        return (
          <div>
            <NavLink to={`/user/${value.name}`}>{value.name} </NavLink>
          </div>
        );
      })}
    </>
  );
}

export default User;
