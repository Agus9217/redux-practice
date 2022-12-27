import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/Tasks/taskSlice";


export const store = configureStore({
  reducer: {
    tasks: taskReducer
  }  
})

