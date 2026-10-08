function Pagination(props) {
  const { currentPage, totalPages, setCurrentPage } = props;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-3 p-5">
      <button
        disabled={currentPage === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((page) => {
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
