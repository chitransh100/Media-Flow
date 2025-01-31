import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice.js"
import searchSlice from "./searchslice.js"
import ChatSlice from "./ChatSlice.js"

const store=configureStore({
   reducer:{
    app: appslice,
    search:searchSlice,
    chat:ChatSlice,
   },
});

export default store;

/*
LRU cache (least resently used)
restrict the cache to store limited keys

*/