import {IncomingMessage, ServerResponse} from "http";

const allProducts = async (request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200; //ok
  response.setHeader("Content-type", "application/json");
  response.end(
    JSON.stringify({
      product1: {
        id: 1,
        itemName: "Black t-shirt",
        itemPrice: 7.95,
        itemSrc: "/products/shirt.png",
      },
      product2: {
        id: 2,
        itemName: "Black hoodie",
        itemPrice: 13,
        itemSrc: "/products/hoodie.png",
      },
      product3: {
        id: 3,
        itemName: "Black cap",
        itemPrice: 23,
        itemSrc: "/products/cap.png",
      },
    }),
  );
};

export default allProducts;
