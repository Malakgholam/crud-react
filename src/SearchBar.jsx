import React from 'react';

const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <div className="w-75 mx-auto my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
