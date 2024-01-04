/* eslint-disable react/prop-types */
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {console.log(books)}
      {books.map((items) => (
        <BookSingleCard key={items.id} books={items} />
      ))}
    </div>
  );
};

export default BooksCard;
