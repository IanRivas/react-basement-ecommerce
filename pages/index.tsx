import React, {useEffect, useState} from "react";
import type {NextPage} from "next";
import Image from "next/image";

import {Product} from "../product/types";

import Nav from "@components/Nav";
import Card from "@components/Card";
import Header from "@components/Header";
import CartModal from "@components/CartModal";
import Footer from "@public/footer.svg";

const KEY = "CartItems";

const Home: NextPage = () => {
  const [productList, setproductList] = useState<Product[]>([]);
  const [CartQueue, setCartQueue] = useState<Product[]>([]);

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window
      .fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        data = Object.values(data);
        setproductList(data);
      });
    const storedCart: Product[] = JSON.parse(localStorage.getItem(KEY) as string);

    if (storedCart) {
      setCartQueue(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(CartQueue));
  }, [CartQueue]);

  const toggleCartModal = (): any => {
    setShow(!show);
  };

  return (
    <div className="container mx-auto">
      <Nav shoppingCart={CartQueue} toggle={toggleCartModal} />
      <CartModal
        products={productList}
        setShoppingCart={setCartQueue}
        shoppingCart={CartQueue}
        show={show}
        toggleShoppingCart={toggleCartModal}
      />
      <Header />
      <div className="container grid grid-flow-col grid-cols-3 gap-4 card-grid">
        {productList.map((product, i) => (
          <Card key={i} changeQuantity={setCartQueue} item={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Image alt="footer" src={Footer} />
      </div>
    </div>
  );
};

export default Home;
