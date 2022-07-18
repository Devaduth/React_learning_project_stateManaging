import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"count",
    initialState:{
        value:1
    },
    reducers:{
        change_count:(state,action) =>{
            state.value=action.payload.count
        }
    }
})

export const {change_count} = counterSlice.actions
export default counterSlice.reducer