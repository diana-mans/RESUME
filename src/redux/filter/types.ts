export enum SortPropertyEnum {
  RATING = 'rating',
  TITLE = 'title',
  PRICE = 'price',
}

export type SortParams = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortParams;
  pageCount?: number;
}
