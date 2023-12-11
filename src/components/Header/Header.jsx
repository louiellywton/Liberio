import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='bg-gradient-library min-h-[93vh] flex flex-col items-center justify-center text-white header-content flex flex-col items-center text-center'>
        <h2 className='header-title text-6xl font-bold'>Find Your Book of Choice</h2>
          <br />
          <p className='header-text mt-[-1.8rem] mb-[2.8rem] opacity-80 max-w-[770px]'>
          Welcome to Liberio, a place where the pursuit of knowledge knows no bounds. In the hallowed halls of literature, you'll embark on a journey that transcends time and space. Our shelves are laden with volumes that span the epochs, inviting you to explore the tapestry of human experience.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
