import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./style.css";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function products() {
      const resp = await api.get(`/products?page=${page}`);
      setProducts(resp.data.docs);
      setTotalPage(resp.data.pages);
    }
    products();
  }, [page]);

  function nextPage(pg) {
    if (page > 0 && page < totalPage) {
      setPage(page + pg);
      return;
    }
  }

  function backPage(pg) {
    if (page > 1) {
      setPage(page - pg);
      return;
    }
  }

  return (
    <div className="product-list">
      {products.map(item => (
        <article key={item._id}>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
          <Link to={"product/" + item._id}>Acessar</Link>
        </article>
      ))}

      {products.length !== 0 ? (
        <div className="actions">
          <button disabled={page === 1} onClick={() => backPage(1)}>
            Anterior
          </button>
          <div className="page">Página {page}</div>
          <button disabled={page === totalPage} onClick={() => nextPage(1)}>
            Próximo
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
