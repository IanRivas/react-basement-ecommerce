import {Dispatch, SetStateAction} from "react";

export interface Product {
  id: number;
  itemSrc: Url;
  itemName: string;
  itemPrice: number;
}

export interface CartItemProps {
  item: Product;
  changeQuantity: Dispatch<SetStateAction<Product[]>>;
}
type Url = string;
