import { configureStore, createSlice } from '@reduxjs/toolkit';

let detail = createSlice({
    name: "detail",
    initialState: [
      
    ],
    reducers: {
      addState(state, action){
        state.push(action.payload);
      },
      clearState(state, action){
        state.pop(action.payload);
      }
    },
  });
  
export let { addState, clearState } = detail.actions;

export default configureStore({
    reducer:{
      detail : detail.reducer
    }
})