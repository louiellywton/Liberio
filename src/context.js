import React, { useState, useContext, useEffect, useCallback } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;
      setBooks(docs); // Update the 'books' state with the fetched data
      setLoading(false);
      console.log(docs);

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            contributor,
            subject, // Retrieve the subjects array
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
  
          // Get the first 4 subjects from the subject array
          const first4Subjects = subject ? subject.slice(0, 3) : [];
  
          return {
            id: key,
            author: author_name,
            contributor,
            subject: first4Subjects,
            cover_id: cover_i,
            edition_count,
            first_publish_year,
            title,
          };
        });

        setBooks(newBooks);
        if(newBooks.length > 1){
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books, // Provide the 'books' state to the context
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
