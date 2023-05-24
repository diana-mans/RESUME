import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import pizzas from './pizzas/slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: { filter, cart, pizzas },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
