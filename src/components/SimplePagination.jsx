import React, { useEffect, useState } from "react";
import "../assets/simplePagination.css";
import { Link } from "react-router-dom";
function Test() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/?limit=194");
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.products.length / 12));
      }
    } catch (err) {
      console.error("Error while fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <>
    <Link to="/"><button className="btn btn-primary">Home</button></Link>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 12 - 12, page * 12).map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page === 1 ? "pagination__disabled" : ""}
            onClick={() => selectedPageHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectedPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page === totalPages ? "pagination__disabled" : ""}
            onClick={() => selectedPageHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
}

export default Test;
