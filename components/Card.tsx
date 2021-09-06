import React from "react";
import Image from "next/image";

import {CartItemProps} from "../product/types";

//images
import addToCart from "@public/addToCart.svg";

function Card({item, changeQuantity}: CartItemProps) {
  const {itemSrc, itemName, itemPrice} = item;

  const handleCart = () => {
    changeQuantity((b) => [...b, item]);
  };

  return (
    <div className="my-16 h-100">
      <div
        className="gradient flex justify-center item-center border-t-2 relative h-full"
        onClick={handleCart}
      >
        <Image alt="item" className="transform rotate-180" layout="fill" src={itemSrc} />
        <Image
          alt="addToCart"
          className="absolute transform rotate-180 opacity-0 hover:opacity-100 cursor-pointer"
          src={addToCart}
        />
      </div>
      <div className="flex justify-between my-2">
        <span className="text-2xl">{itemName}</span>
        <span className="text-2xl">${itemPrice}</span>
      </div>
    </div>
  );
}

export default Card;
