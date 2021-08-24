import React from "react";
import Image from "next/image";

import HeaderImage from "@public/header.svg";
import Asterisk from "@public/asterisk.svg";
import Asterisk2 from "@public/asterisk2.svg";

function Header() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <Image alt="header" src={HeaderImage} />
      </div>
      <div className="border-t-2 border-b-2 border-white my-8 py-2 overflow-hidden">
        <p className="my-2 text-5xl font-bold h-10  whitespace-nowrap text-center leading-10 text-animation">
            A man can’t have enough base­ment swag - A man can’t have enough base­ment swag - A man
          can’t have enough base­ment swag
        </p>
      </div>
      <div className="absolute -bottom-10 right-0 w-48 h-48">
        <Image alt="Asterisk" src={Asterisk2} />
      </div>
      <div className="absolute -bottom-24 left-0 w-48 h-48">
        <Image alt="Asterisk" src={Asterisk} />
      </div>
    </div>
  );
}

export default Header;
