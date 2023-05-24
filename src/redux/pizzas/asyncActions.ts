import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasProps, PizzasItem } from './types';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params: FetchPizzasProps, thunkAPI) => {
    const { currentPage, category, search, sortBy } = params;
    const { data } = await axios.get<PizzasItem[]>(
      `https://6411cbb89f0a55b32d93f547.mockapi.io/Items?page=${currentPage}&limit=8&${category}${search}&sortBy=${sortBy}&order=asc`,
    );
    return data as PizzasItem[];
  },
);
