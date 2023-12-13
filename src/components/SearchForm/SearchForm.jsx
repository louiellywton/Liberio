import React, { useRef, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();
  const [isInitialMount, setIsInitialMount] = useState(true);

  useEffect(() => {
    if (isInitialMount) {
      // Automatically navigate to '/book' only on the initial mount
      navigate("/book");
      setIsInitialMount(false);
    } else {
      // Focus on the search bar for subsequent renders
      searchText.current.focus();
    }
  }, [isInitialMount, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please enter something...");
    } else {
      setSearchTerm(tempSearchTerm);
    }
    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white text-black">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World ..."
                ref={searchText}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-green-600" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
