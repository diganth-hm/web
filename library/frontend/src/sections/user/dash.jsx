import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import BookCard from "../../components/bookcard";

import { Search } from "lucide-react";
import { useState } from "react";

function User() {

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      image:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },

    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      image:
        "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },

    {
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Fiction",
      image:
        "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg"
    },

    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      image:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    }
  ];

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||

      book.author
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||

      book.category
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-2">
            Browse Books
          </h1>

          <p className="text-gray-600 mb-8">
            Explore and pick your favorite books here
          </p>

          <div className="flex gap-5 mb-8">

            <select className="bg-white p-3 rounded-lg border w-64">

              <option>
                All Categories
              </option>

              <option>
                Fiction
              </option>

              <option>
                Self Help
              </option>

              <option>
                Finance
              </option>

            </select>

            <div className="flex items-center bg-white rounded-lg border px-4 flex-1">

              <input
                type="text"
                placeholder="Search books..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="flex-1 p-3 outline-none"
              />

              <Search size={20} />

            </div>

          </div>

          <div className="grid grid-cols-4 gap-6">

            {filteredBooks.map(
              (book, index) => (
                <BookCard
                  key={index}
                  title={book.title}
                  author={book.author}
                  category={book.category}
                  image={book.image}
                />
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default User;