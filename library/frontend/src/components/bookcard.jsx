function BookCard({
  title,
  author,
  category,
  image
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <div className="mt-4">

        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {author}
        </p>

        <p className="text-gray-500 text-sm mt-1">
          {category}
        </p>

        <button className="w-full mt-4 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 transition">

          Borrow

        </button>

      </div>

    </div>
  );
}

export default BookCard;