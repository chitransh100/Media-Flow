import { createSlice } from "../../node_modules/@reduxjs/toolkit";

const appslice=createSlice({
    name: "app",
    initialState:{
        toggle:true,
    },
    reducers: {
        togglemenu: (state)=>
        {
            state.toggle=!state.toggle;
        },
        closeMenu: (state)=>
        {
            state.toggle=false;
        }
    }
})

export const {togglemenu} = appslice.actions;
export const {closeMenu} = appslice.actions
export default appslice.reducer