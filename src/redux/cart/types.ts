export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  size: number;
  type: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
