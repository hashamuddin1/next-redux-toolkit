"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function DisplayUsers(){
    const userData=useSelector((data)=>data.users)
    const dispatch = useDispatch();
    const userRemoveDispatch = (id) => {
      dispatch(removeUser(id));
    };
    return (
      <div>
        <h1>Display users</h1>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <button onClick={() => userRemoveDispatch(user.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}