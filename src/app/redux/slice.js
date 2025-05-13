const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
    users:[]
}

const slice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    //state= iske andar kia data hay
    //action= ham isme kia data dalay gay
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const data=state.users.filter((user) => user.id !== action.payload);
      state.users=data
    },
  },
});

export const { addUser, removeUser } = slice.actions;
export default slice.reducer