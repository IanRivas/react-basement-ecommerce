import React from "react";
import Image from "next/image";

import {Product} from "../product/types";

import addToCart from "@public/addToCart.svg";

function Card({itemSrc, itemName, itemPrice}: Product) {
  return (
    <div className="my-16">
      <div className="gradient flex justify-center item-center border-t-2 relative">
        <Image alt="item" className="transform rotate-180" layout="fill" src={itemSrc} />
        <Image
          alt="addToCart"
          className="absolute transform rotate-180 opacity-0 hover:opacity-100 cursor-pointer"
          src={addToCart}
        />
      </div>
      <div className="flex justify-between my-2">
        <span className="text-2xl">{itemName}</span>
        <span className="text-2xl">{itemPrice}</span>
      </div>
    </div>
  );
}

export default Card;
