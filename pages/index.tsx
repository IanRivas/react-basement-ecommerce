import React, {useEffect, useState} from "react";
import type {NextPage} from "next";
import Image from "next/image";

import {Product} from "../product/types";

import Nav from "@components/Nav";
import Card from "@components/Card";
import Header from "@components/Header";
import Footer from "@public/footer.svg";

const Home: NextPage = () => {
  const [productList, setproductList] = useState<Product[]>([]);

  useEffect(() => {
    window
      .fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        data = Object.values(data);
        setproductList(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Nav />
      <Header />
      <div className="container grid grid-flow-col grid-cols-3 gap-4">
        {productList.map((product, i) => (
          <Card
            key={i}
            itemName={product.itemName}
            itemPrice={product.itemPrice}
            itemSrc={product.itemSrc}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Image alt="footer" src={Footer} />
      </div>
    </div>
  );
};

export default Home;
