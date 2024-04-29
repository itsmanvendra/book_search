import React from "react";
import AuthorDetails from "./AuthorDetails";

const BookComponent = ({ book }) => {
    const [open, setOpen] = React.useState(false);
    const [authorDetails, setAuthorDetails] = React.useState("");

    async function getAuthorDetails(author) {
      let response = await fetch(
        `https://openlibrary.org/search/authors.json?q=${author}`
      );
      response = await response.json();
      setAuthorDetails(response.docs[0]);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = (authorName) => {
        // setAuthor(authorName);
        getAuthorDetails(authorName);
        setOpen(true);
    }
  return (
    <>
      <div key={book.key} className="bookCard">
        <img
          src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div>{book.title}</div>
        <div
          style={{
            width: "90%",
            overflow: "hidden",
            textWrap: "nowrap",
            cursor: "pointer",
          }}
          onClick={() => handleOpen(book?.author_name?.[0])}
        >
          Authors : {book?.author_name && book?.author_name?.[0]}
        </div>
        <AuthorDetails
          isOpen={open}
          onClose={handleClose}
          authorDetails={authorDetails}
        />
      </div>
    </>
  );
};

export default BookComponent;
