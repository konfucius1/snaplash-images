import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <section className="pt-24">
      <h1 className="text-4xl font-medium text-center">Snaplash</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-center mt-8 space-x-2">
          <input
            type="text"
            name="search"
            placeholder="Type here"
            className=" input input-bordered input-primary w-full max-w-xl text-gray-600"
          />
          <button type="submit" className="btn font-normal">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
