import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task Description",
    completed: false 
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task Description",
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {

  }
})

export default taskSlice.reducer