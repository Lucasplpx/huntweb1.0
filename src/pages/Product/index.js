import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./style.css";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    async function product() {
      const resp = await api.get(`/products/${id}`);
      console.log(resp.data);
      setProduct(resp.data);
    }
    product();
  }, [id]);

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        URL: <a href={product.url}>{product.url}</a>
      </p>
    </div>
  );
}
