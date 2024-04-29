import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookComponent from "./BookComponent";
import Loader from "./Loader";
const SearchReseult = () => {
  const { books, loading, error } = useSelector((state) => state.searchBook);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [loading]);

  return (
    <div>
      {!loading && books.length == 0 && (
        <div>No books found / Search for Another book</div>
      )}
      {loading && <Loader />}
      {books && books.length > 0 && (
        <>
          <div className="bookContainer">
            {books
              .filter((b) => b.cover_i)
              ?.slice((page - 1) * 20, page * 20)
              ?.map((book) => {
                return (
                  <>
                    <BookComponent book={book} />
                  </>
                );
              })}
          </div>
          <div className="naviagtionContainer">
            <button
              className="navigationButton"
              style={{
                cursor: page != 1 ? "pointer" : "not-allowed",
                opacity: page != 1 ? 1 : 0.5,
              }}
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page == 1}
            >
              Previous
            </button>
            <button
              className="navigationButton"
              style={{
                cursor: books.length < page * 20 ? "not-allowed" : "pointer",
                opacity: books.length < page * 20 ? 0.5 : 1,
              }}
              onClick={() => setPage((prev) => prev + 1)}
              disabled={books.length < page * 20}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchReseult;
