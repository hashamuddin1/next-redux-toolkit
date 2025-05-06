"use client"
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function AddUsers() {
    const [name,setName]=useState('')
    const dispatch=useDispatch()
    const userDispatch=()=>{
        dispatch(addUser(name));
    }
  return (
    <div>
      <h1>Add users</h1>
      <input
        type="text"
        placeholder="Add New User"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>Add User</button>
    </div>
  );
}
