import React from "react";

export const SearchInput = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
};

export const BookList = ({ searchQuery, books }) => {
  const filteredBooks = books.filter((books) => {
   return books.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div>
       {filteredBooks.length >0 ? (
        <ul>
            {filteredBooks.map((book) => <li key={book}>{book}</li>)}
        </ul>
       ) : (<p>No books found</p>)}
      </div>
    </>
  );
};
