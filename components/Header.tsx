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
      <div className="absolute flex justify-center items-center svg-animation | bottom-5 right-0 w-16 h-16 | md:bottom-5 md:right-0 md:w-28 md:h-28 | xl:-bottom-10 xl:right-0  xl:w-48 xl:h-48">
        <Image alt="Asterisk" src={Asterisk2} />
      </div>
      <div className="absolute flex justify-center items-center svg-animation | -bottom-5 left-0 w-16 h-16 | md:-bottom-16 md:left-0 md:w-28 md:h-28 | xl:-bottom-24 xl:left-0 xl:w-48 xl:h-48">
        <Image alt="Asterisk" src={Asterisk} />
      </div>
    </div>
  );
}

export default Header;
