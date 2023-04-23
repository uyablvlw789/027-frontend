function Pagination({ totalPosts, postPerPage, currentPage, setCurrentPage, selectedOption }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        let classNames = "border border-black px-3.5 py-1.5 mr-4";
        if (page === currentPage) {
          classNames = "border border-white bg-black text-white px-3.5 py-1.5 mr-4";
        }
        return (
          <button
            className={classNames}
            onClick={() => {
              setCurrentPage(page);
            }}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
