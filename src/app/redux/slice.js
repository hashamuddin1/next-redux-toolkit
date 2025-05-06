const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
    users:[]
}

const slice=createSlice({
    initialState,
    reducers:{
        //state= iske andar kia data hay
        //action= ham isme kia data dalay gay
        addUser:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.name,
            }
            state.users.push(data)
        }
    }
})

export const {addUser}=slice.actions
export default slice.reducer