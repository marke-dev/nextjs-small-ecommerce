interface BaseItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

export interface CartItem extends BaseItem {
  quantity: number;
}

export interface Product extends BaseItem {
  description: string;
}
