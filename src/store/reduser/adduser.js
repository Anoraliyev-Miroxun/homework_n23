import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    users: []
}

export const user = createSlice({
    name: "addUser",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const isAvalable = state.users.find((i) => i.username === action.payload.username);

            if(!isAvalable){
                return {
                    ...state,users:[...state.users,action.payload]
                }
            }

            return state
        },
        deleteUser:(state,action)=>{
            return {...state,users:state.users.filter((i)=>(
                i.id !==action.payload.id
            ))}
        }
        ,
        update:(state,action)=>{
            return {
                ...state,users:state.users.map((i)=>i.id===action.payload.id?{...action.payload}:{...i})
            }
        }
        

    }

})

export default user.reducer
export const { addUser,deleteUser,update } = user.actions;