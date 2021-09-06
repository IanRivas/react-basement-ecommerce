import React from "react";
import Image from "next/image";

import arrow from "../public/arrow-right.png";
import {Product} from "../product/types";

import ShoppingCard from "./ShoppingCard";

export interface CartProps {
  shoppingCart: Product[];
  setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
  show: boolean;
  toggleShoppingCart: () => void;
}

const CartModal: React.FC<CartProps> = ({
  shoppingCart,
  setShoppingCart,
  show,
  toggleShoppingCart,
  products,
}) => {
  const showHideClassName = show
    ? "bg-block fixed bg-black text-white top-0 right-0 z-10 border border-white w-3/5 h-3/4 | xl:w-2/5 xl:h-3/4 modal-container "
    : "hidden";

  const subtractItem = (id: number) => {
    shoppingCart.splice(
      shoppingCart.findIndex((i) => i.id === id),
      1,
    );

    setShoppingCart([...shoppingCart]);
  };

  const addItem = (x: Product) => {
    setShoppingCart([...shoppingCart, x]);
  };

  return (
    <div className={showHideClassName}>
      <div className="relative h-full container">
        <div className="flex justify-end items-center text-3xl mr-8 px-3 pt-3">
          <button className="flex items-center gap-2" onClick={toggleShoppingCart}>
            <Image alt="arrow" height={30} src={arrow} width={30} />
            <span className="text-center">CLOSE</span>
          </button>
        </div>
        <div className="flex justify-center">
          <span className="text-8xl">YOUR</span>
          <span className="text-8xl text-black text-bor">CART</span>
        </div>
        <div className="px-4 overflow-scroll w-full h-4/6 overflow-x-hidden">
          {products.map((cart, index) =>
            shoppingCart.filter((c) => c.id === index + 1).length > 0 ? (
              <ShoppingCard
                key={index}
                add={addItem}
                cart={cart}
                count={shoppingCart.filter((c) => c.id === index + 1).length}
                substract={subtractItem}
              />
            ) : (
              <h3> </h3>
            ),
          )}
        </div>
        <div className="absolute bottom-10 sm:bottom-0 right-0 flex justify-between flex-col sm:flex-row  w-full sm:h-14 border border-white">
          <div className="w-full sm:w-2/3 flex sm:justify-start justify-center items-center">
            <span className="text-4xl ml-6">TOTAL:</span>
            <span className="text-4xl ml-4">
              $
              {shoppingCart.length > 0
                ? shoppingCart
                    .map((pro) => pro.itemPrice)
                    .reduce((acum, currentValue) => acum + currentValue)
                    .toFixed(2)
                : 0}
            </span>
          </div>
          <div className="w-full sm:w-1/3 sm:border-l-2 border-t-2 sm:border-t-0 border-white flex justify-center items-center">
            <span className="text-2xl 2xl:text-4xl text-black text-bor">CHECKOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
