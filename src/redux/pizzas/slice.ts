import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncActions';
import { PizzasItem, PizzasSliceState, Status } from './types';

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzasItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions; //вытаскиваем наши методы из асtions

export default pizzasSlice.reducer;
