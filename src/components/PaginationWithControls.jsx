import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [pageRange, setPageRange] = useState([1, 10]); // Page range (1-10, 11-20, etc.)

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/?limit=12&skip=${(page - 1) * 12}`
    );
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 12)); // Assuming `data.total` is the total count of products
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // Update page range based on the current page
  const updatePageRange = (currentPage) => {
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);
    setPageRange([startPage, endPage]);
  };

  useEffect(() => {
    updatePageRange(page); // Update the range whenever the page changes
  }, [page, totalPages]);

  // Next and Previous for page ranges
  const goToNextRange = () => {
    const newStartPage = pageRange[1] + 1;
    if (newStartPage <= totalPages) {
      setPage(newStartPage);
    }
  };

  const goToPreviousRange = () => {
    const newStartPage = pageRange[0] - 10;
    if (newStartPage > 0) {
      setPage(newStartPage);
    }
  };

  return (
    <>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>

      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => (
            <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          {/* Previous Range Button */}
          <span
            onClick={goToPreviousRange}
            className={pageRange[0] > 1 ? "" : "pagination__disabled"}
          >
            Previous
          </span>
          <span
            className={page > 1 ? "" : "pagination__disabled"}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀️
          </span>

          {/* Page Numbers */}
          {[...Array(pageRange[1] - pageRange[0] + 1)].map((_, i) => {
            const pageNum = pageRange[0] + i;
            return (
              <span
                key={pageNum}
                className={page === pageNum ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(pageNum)}
              >
                {pageNum}
              </span>
            );
          })}

          <span
            className={page < totalPages ? "" : "pagination__disabled"}
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶️
          </span>
          {/* Next Range Button */}
          <span
            onClick={goToNextRange}
            className={pageRange[1] < totalPages ? "" : "pagination__disabled"}
          >
            Next 
          </span>
        </div>
      )}
    </>
  );
}

export default Pagination;
