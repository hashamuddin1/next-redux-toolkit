"use client"
import { useSelector } from "react-redux"

export default function DisplayUsers(){
    const userData=useSelector((data)=>data.users)
    console.log({ userData });
    return (
      <div>
        <h1>Display users</h1>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}