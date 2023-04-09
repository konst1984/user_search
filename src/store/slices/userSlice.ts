import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
  error: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
      setUser(state, action){
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.error = null;
      },
      removeUser(state){
        state.email = null;
        state.token = null;
        state.id = null;
        state.error = null;
      },
      setError(state, action){
        const message = action.payload.message
        const start = message.indexOf('/');
        state.error = message.slice(start + 1, message.length - 2).trim()
      }
    }
  }
)

export const {setUser, removeUser,setError} = userSlice.actions;
export default userSlice.reducer;