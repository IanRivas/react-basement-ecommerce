import React from "react";
import Image from "next/image";

import {Product} from "../product/types";

import logo from "@public/logo.svg";
import hd4k from "@public/hd-4k.svg";
import b from "@public/b.svg";

type navProp = {
  toggle: () => void;
  shoppingCart: Product[];
};

function Header({toggle, shoppingCart}: navProp) {
  return (
    <nav className="flex justify-between my-8 sticky top-0 bg-black z-10 py-2 px-4 sm:px-0">
      <div className="logo-long flex items-center">
        <Image alt="Basement" src={logo} />
      </div>
      <div className="borrar-short-logo flex items-center">
        <Image alt="basement-logo-short" src={b} />
      </div>
      <div className="borrar flex items-center">
        <Image alt="hd-4k" src={hd4k} />
      </div>
      <button className="px-7 py-2 border-2 text-lg rounded-full" onClick={toggle}>
        CART ({shoppingCart.length})
      </button>
    </nav>
  );
}

export default Header;
