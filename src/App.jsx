import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:5173/";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };
  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUsers) => {
    const response = await axios.post(`${BASE_URL}/users`, newUsers);
    console.log("response", response.data);
  };
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  useEffect(() => {
    // getAllUsers();
    //getUserById(1);
    //const newUsers = {
    //username: "Yarin23",
    //password: "hka1",};
    //createUser(newUsers);
    updateUser("1", {
      username: "Yakup2323",
      password: "5565",
    });
  }, []);

  return <div></div>;
}

export default App;
