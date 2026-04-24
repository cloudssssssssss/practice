import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], status: 'idle' },
  reducers: {
    addTodo: (state, action) => {
      state.items.unshift({ id: Date.now(), title: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    });
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;