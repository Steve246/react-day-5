import React, { Component, useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";

const Production = () => {
  const { productService } = useDeps();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    onGetAllProduct();
  }, []);

  const onGetAllProduct = async () => {
    setLoading(true);
    try {
      const response = await productService.getAllProduct();
      // ini dia id nomor 1
      console.log("ini response", response.products);
      setProducts(response.products);
    } catch (e) {
      // console.log(e);
      console.log("OOps....");
    } finally {
      setLoading(false);
    }
  };

  console.log("ini produk", products);

  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li key={product.id}> {product.productName} </li>;
        })}
      </ul>
    </div>
  );
};

export default Production;
