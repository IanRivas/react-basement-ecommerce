import React from "react";
import Image from "next/image";

import {Product} from "../product/types";

type propsShopCard = {
  cart: Product;
  count: number;
  substract: (id: number) => void;
  add: (x: Product) => void;
};

function ShoppingCard({cart, count, substract, add}: propsShopCard) {
  const {id, itemSrc, itemPrice, itemName} = cart;

  const left = () => {
    substract(id);
  };

  const right = () => {
    add(cart);
  };

  return (
    <div className="border border-white mx-3 mb-3 flex">
      <div className="w-2/5 gradient relative ">
        <Image alt="item-image" className="transform rotate-180" layout="fill" src={itemSrc} />
      </div>
      <div className="w-3/5 p-5 eliminar-pading">
        <h3 className="text-1xl sm:text-4xl uppercase title-card-chiqui">{itemName}</h3>
        <h4 className="text-1xl sm:text-2xl opacity-50 bye">
          Unisex Basic Softstyle {itemName.split(" ")[1]}
        </h4>
        <p className="precio-u">Precio c/u: ${itemPrice}</p>
        <div className="flex gap-3 sm:mt-5 lg:mt-12 items-center botonera">
          <span className="text-base sm:text-2xl">QUANTITY:</span>
          <div className="flex gap-3 border border-white rounded-full px-2 items-center">
            <button className="text-base sm:text-2xl" onClick={left}>
              -
            </button>
            <span className="text-base sm:text-2xl">{count}</span>
            <button className="text-base sm:text-2xl" onClick={right}>
              +
            </button>
          </div>
        </div>
        <h3 className="text-1xl sm:text-2xl card-price">${(itemPrice * count).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default ShoppingCard;
