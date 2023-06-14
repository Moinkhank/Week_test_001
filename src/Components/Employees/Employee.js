import React, { useEffect, useState } from "react";
import FilterUsers from "./Filter";
import axios from "axios";

function Employee(props) {
  const [users, setUsers] = useState([]);
  const [state,setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => {
        console.log(res.data.results);
        setUsers(res.data.results);
        setState(res.data.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
       <FilterUsers setUsers={setUsers} state={state} />
      <table width="100%" frame="box" rules="all">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody align="center">
          {users.map((ele) => {
            return (
              <tr key={ele.login.uuid}>
                <td>
                  <img src={ele.picture.medium} width="100" height={100} alt="User" />
                </td>
                <td>
                  {ele.name.first} {ele.name.last}
                </td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
                <td>{ele.location.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
