import { useState, useEffect, useCallback } from "react";
import {IoSearch} from 'react-icons/io5'

import axios from "../../../fetch/axios";
import { debounce } from "lodash";
import { IoIosArrowRoundForward } from "react-icons/io";

const Terminologi = ({ references: initialReferences, initialCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [references, setReferences] = useState(initialReferences);
  const [category, setCategory] = useState(initialCategory);

  

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchSearchResults = async (query, category) => {
    if (!query) return;
    try {
      const response = await axios.get(`/search/terminologi?q=${query}&cat=${category}`);
      console.log("Data received:", response.data); // Log data yang diterima
      
      const responseData = response.data?.data !== undefined ? response.data.data : response.data;
      if (responseData && responseData.length > 0) {
        setReferences(responseData);
      } else {
        setReferences([]);
        console.log("No data found, setting references to empty."); // Log jika tidak ada data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setReferences([]);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query, category) => {
      fetchSearchResults(query, category);
    }, 300),
    [fetchSearchResults, category] // Memasukkan fetchSearchResults dan category ke dalam dependency array
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery, category);
    } else {
      setReferences(initialReferences); // Set to initial references when search query is empty
    }
  }, [searchQuery, category, debouncedSearch, initialReferences]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = references.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(references.length / itemsPerPage);

  return (
    <div className="container mx-auto flex justify-start items-start md:justify-center md:items-center animate-fade-up">
      <div className="relative lg:px-24 px-4 md:px-24 w-3/4 min-h-screen md:py-28 py-16">
      <div className="flex max-w-full flex-col  items-center">
        <h1 className="font-bold text-white text-3xl text-center items-center flex ml-8 md:ml-0 w-full md:w-3/4">
          Kamus Terminologi Medis Sistem Muskuloskeletal
        </h1>
          <div className='relative flex flex-1 w-full ml-14 md:ml-0 md:w-3/4 pt-5'>
        <input type="text" name="" id="" className='w-full border-gray-200 bg-gray-100 py-3 px-5 text-sm rounded-3xl'
         value={searchQuery}
         onChange={handleSearchChange}/>
        <IoSearch className='right absolute right-3 top-7 h-6 w-5'/>
       </div>
      </div>
        <div className="pt-4">
          <div className="flex text-white justify-between items-center">
            <div>
              <h1 className="capitalize">{category}</h1>
            </div>
            <div>
         <IoIosArrowRoundForward size={30}/>
            </div>
          </div>
          <table className="text-sm text-left w-full text-gray-300 glass-card overflow-hidden">
          <thead className="text-xs text-white uppercase bg-white/10 border-b border-white/20">
            <tr>
              <th scope="col" className="px-6 py-4">No</th>
              <th scope="col" className="px-6 py-4">Istilah Medis</th>
              <th scope="col" className="px-6 py-4">Arti</th>
            </tr>
          </thead>
          <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item,index) => (
              <tr key={item.id} className="border-b capitalize border-white/10 text-white hover:bg-white/10 transition-colors duration-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-blue-300 text-base">{item.nama}</td>
                <td className="px-6 py-4 font-light text-gray-300">{item.arti}</td>
              </tr>
            ))
          ) : searchQuery.length > 0 ? (
            <tr>
              <td colSpan="3" className="px-6 py-16 text-center text-gray-400">
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h2 className="text-xl text-white font-bold mb-2">Data Tidak Ditemukan</h2>
                  <p className="text-sm md:text-base">Tidak ada istilah medis yang ditemukan untuk "{searchQuery}".</p>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3" className="px-6 py-16 text-center text-gray-400">
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h2 className="text-xl text-white font-bold mb-2">Pencarian Kosong</h2>
                  <p className="text-sm md:text-base">Silahkan masukkan kata kunci pencarian pada kotak di atas.</p>
                </div>
              </td>
            </tr>
          )}
           </tbody>
        </table>

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
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
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
  const category = query.cat || "default"; // Ganti dengan kategori default yang sesuai

  try {
    const url = query.q
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/terminologi?q=${query.q}&cat=${category}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/terminologi?cat=${category}`;
    const response = await axios.get(url);
    references = response.data?.data !== undefined ? response.data.data : response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    references = [];
  }

  return {
    props: {
      references,
      initialCategory: category, // Kirim kategori yang diterima atau default sebagai props
    },
  };
}

export default Terminologi;
