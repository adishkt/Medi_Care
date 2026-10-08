function Pagination(props) {
  const { currentPage, totalPages, setCurrentPage } = props;
  return (
    <div className="flex justify-center gap-3 p-5">
      <button
        disabled={currentPage === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            className="text-black"
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ),
      )}

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
