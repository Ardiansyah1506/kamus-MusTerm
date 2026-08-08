import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "../../fetch/axios";
import { debounce } from "lodash";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Patologi = ({ references: initialReferences }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
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
      const response = await axios.get(`/search/patologi?q=${query}`);
      setReferences(response.data?.data !== undefined ? response.data.data : response.data);
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
    <div className="container mx-auto flex justify-start items-start md:justify-center md:items-center animate-fade-up">
    <div className="relative lg:px-24 px-4 md:px-24 w-3/4 min-h-screen md:py-28 py-16">
    <div className="flex max-w-full flex-col items-center">
      <h1 className="font-bold text-white text-3xl text-center items-center flex ml-8  w-full md:w-3/4">
        Kamus Patologi Medis Sistem Muskuloskeletal
      </h1>
        <div className='relative flex flex-1 w-full ml-8 md:w-3/4 pt-5'>
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
          <div className="w-full flex-row text-white flex justify-between items-center mb-6 pl-4">
             <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">Daftar Patologi</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between w-full p-6 glass-card group cursor-pointer"
            >
              <div className="mb-4">
                <h1 className="text-white font-bold text-2xl group-hover:text-blue-400 transition-colors">{item.nama}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncateText(item.deskripsi, 180),
                  }}
                  className="text-gray-300 mt-3 text-sm font-light leading-relaxed whitespace-pre-wrap"
                />
              </div>

              <div className="flex w-full justify-end mt-4">
                <Link
                  href={`/patologi/${item.id}`} 
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600/40 hover:bg-blue-600 rounded-lg focus:outline-none transition-all duration-300 border border-blue-500/30 shadow-md hover:shadow-blue-500/50"
                >
                  Lihat Selengkapnya
                  <svg
                    className="rtl:rotate-180 w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform"
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
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 w-full flex flex-col items-center justify-center py-16 px-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-xl text-white font-bold mb-2">Data Tidak Ditemukan</h2>
              <p className="text-gray-400 text-sm md:text-base text-center">Maaf, kami tidak dapat menemukan data pencarian untuk "{searchQuery}". Coba kata kunci yang lain.</p>
            </div>
          )}
          </div>

          <div className="mt-8 w-full flex flex-col md:flex-row justify-center md:justify-between items-center text-white px-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
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
               <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
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
    const url = query.q ? `/search/patologi?q=${query.q}` : "/patologi"; // Menggunakan parameter pencarian jika ada
    const response = await axios.get(url);
    references = response.data?.data !== undefined ? response.data.data : response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      references,
    },
  };
}

export default Patologi;
