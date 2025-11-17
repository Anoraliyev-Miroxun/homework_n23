import { configureStore } from "@reduxjs/toolkit";
import userReduser from './reduser/adduser.js';
import { loadState, saveState } from "../storge/strorge.js";

export const store = configureStore({
    reducer: {
        userReduser
    },
preloadedState:{
    userReduser:loadState("users")
}
})

store.subscribe(()=>{
    saveState("users",store.getState().userReduser)
})