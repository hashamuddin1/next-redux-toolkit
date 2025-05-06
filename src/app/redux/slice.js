const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
    users:[]
}

const slice=createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        //state= iske andar kia data hay
        //action= ham isme kia data dalay gay
        addUser:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.payload,
            }
            state.users.push(data)
        }
    }
})

export const {addUser}=slice.actions
export default slice.reducer