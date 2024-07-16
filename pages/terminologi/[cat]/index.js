import { useState, useEffect, useCallback } from "react";
import {IoSearch} from 'react-icons/io5'

import axios from "../../../fetch/axios";
import { debounce } from "lodash";
import { IoIosArrowRoundForward } from "react-icons/io";

const Patologi = ({ references: initialReferences, initialCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
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
      if (response.data && response.data.length > 0) {
        setReferences(response.data);
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
    <div className="container mx-auto flex justify-start items-start md:justify-center md:items-center">
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
          <table className="text-sm text-left  w-full text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase">
            <tr className="border-b border-gray-500">
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <p>No</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <p>Istilah Medis</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <p>Arti</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item,index) => (
              <tr key={item.id} className="border-b capitalize border-gray-500 text-white">
              <td className="px-6 py-2">{index + 1}</td>
              <td className="px-6 py-2">{item.nama}</td>
              <td className="px-6 py-2">{item.arti}</td>
            </tr>
            ))
          ) : searchQuery.length > 0 ? (
            <div className="text-white">
              Tidak ada data yang ditemukan untuk pencarian tersebut.
            </div>
          ) : (
            <div className="text-white">
              Masukkan kata kunci untuk pencarian.
            </div>
          )}
           </tbody>
        </table>

          <div className="mt-4 w-full mb-2 flex flex-col md:flex-row justify-center md:justify-between gap-3 ml-7 md:ml-0 items-center text-white">
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
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5} selected>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
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
  const category = query.cat || "default"; // Ganti dengan kategori default yang sesuai

  try {
    const url = query.q
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/terminologi?q=${query.q}&cat=${category}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/terminologi?cat=${category}`;
    console.log("Requesting URL:", url);
    const response = await axios.get(url);
    console.log("Data received:", response.data);
    references = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    console.log(url)
    references = [];
  }

  return {
    props: {
      references,
      initialCategory: category, // Kirim kategori yang diterima atau default sebagai props
    },
  };
}

export default Patologi;
