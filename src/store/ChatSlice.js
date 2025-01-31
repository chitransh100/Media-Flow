import { createSlice } from "@reduxjs/toolkit";
import { DEF_LIVE } from "./constants";

const ChatSlice=createSlice(
    {
        name:"chat",
        initialState:
        {
            message:[]
        },
        reducers:
        {
            addMessage:(state,action)=>
            {
                state.message.splice(DEF_LIVE,1)
                state.message.push(action.payload)   
            }
        }
    }
);

export const {addMessage} =ChatSlice.actions;
export default ChatSlice.reducer;