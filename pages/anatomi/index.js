import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "/fetch/axios";
import { debounce } from "lodash";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Anatomi = ({ references: initialReferences }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [references, setReferences] = useState(initialReferences);

  useEffect(() => {
    // Initialize search results on first load
    fetchSearchResults(searchQuery);
  }, []);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`/search/anatomi?q=${query}`);
      setReferences(response.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedSearch = debounce((query) => {
    fetchSearchResults(query);
  }, 100);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = references.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(references.length / itemsPerPage);

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="container mx-auto flex justify-start items-start md:justify-center md:items-center">
    <div className="relative lg:px-24 px-4 md:px-24 w-3/4 min-h-screen md:py-28 py-16">
    <div className="flex max-w-full flex-col  items-center">
      <h1 className="font-bold text-white text-3xl text-center items-center flex ml-8 md:ml-0 w-full md:w-3/4">
        Kamus Anatomi Medis Sistem Muskuloskeletal
      </h1>
        <div className='relative flex flex-1 w-full ml-14 md:ml-0 md:w-3/4 pt-5'>
            <input
              type="text"
              name=""
              id=""
              className="w-full border-gray-200 bg-gray-100 py-3 px-5 text-sm rounded-3xl"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <IoSearch className="right absolute right-3 top-7 h-6 w-5" />
          </div>
        </div>
        <div className="pt-4 md:ml-0 ml-10 flex flex-col justify-center w-full items-center">
          <div className="flex w-full flex-row text-white justify-between items-center">
            <div>
              <h1>Referensi</h1>
            </div>
            <div>
              <IoIosArrowRoundForward size={40} className="font-bold" />
            </div>
          </div>
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full gap-y-2 border-b-2 border-gray-600 mb-4"
            >
              <h1 className="text-white font-medium text-xl">{item.nama}</h1>
              <small
                dangerouslySetInnerHTML={{
                  __html: truncateText(item.deskripsi, 150),
                }}
                className="text-white"
              />

              <div className="flex w-full justify-end">
                <Link
                  href={`/anatomi/${item.id}`} // Link to specific terminology item, adjust URL as needed
                  className="inline-flex px-3 py-2 text-sm font-medium text-white focus:outline-none"
                >
                  Lihat Referensi
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
            <div className="mt-4 w-full flex flex-col md:flex-row justify-center md:justify-between gap-3 ml-7 md:ml-0 items-center text-white">
            <div>
              <label htmlFor="itemsPerPage" className="mr-2">
                Items per page:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="px-2 py-1 bg-gray-800 rounded-md"
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-800 rounded-l-md"
              >
                Prev
              </button>
              <span className="px-3">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-800 rounded-r-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let references = [];
  const { query } = context;

  try {
    const url = query.q ? `/search/anatomi?q=${query.q}` : "/anatomi"; // Menggunakan parameter pencarian jika ada
    const response = await axios.get(url);
    references = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      references,
    },
  };
}

export default Anatomi;
