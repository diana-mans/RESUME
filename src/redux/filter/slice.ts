import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortParams, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.RATING,
  },
  pageCount: 2,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      //action мы передаем при вызове функции, например dispatch(setCategoryId(5))
      state.categoryId = action.payload; //но 5 хранится не в самом action, а в его свойстве payload
      if (action.payload === 0) {
        state.pageCount = 2;
      } else {
        state.pageCount = 1;
      }
      state.currentPage = 1;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.categoryId = 0;
      state.currentPage = 1;
      state.pageCount = 1;
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortParams>) {
      state.sort = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSearchValue, setSort, setCurrentPage, setFilters } =
  filterSlice.actions; //вытаскиваем наши методы из асtions

export default filterSlice.reducer;
