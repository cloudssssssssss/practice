import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/model/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});