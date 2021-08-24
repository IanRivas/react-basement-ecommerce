import React from "react";
import Image from "next/image";

import Cart from "@components/Cart";
import logo from "@public/logo.svg";
import hd4k from "@public/hd-4k.svg";

function Header() {
  return (
    <nav className="flex justify-between my-8">
      <Image alt="Basement" src={logo} />
      <Image alt="hd-4k" src={hd4k} />
      <Cart />
    </nav>
  );
}

export default Header;
