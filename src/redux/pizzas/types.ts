export type FetchPizzasProps = {
  currentPage: number;
  category: string;
  search: string;
  sortBy: string;
};

export type PizzasItem = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzasSliceState {
  items: PizzasItem[];
  status: Status;
}
