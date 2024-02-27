"use cleint";
import React, { useState } from "react";

function ShopFilter({ filter }) {
  const [search, setSearch] = useState();
  const handleFilter = (e) => {
    setSearch(e.target.value);
    filter(search);
  };

  return (
    <div className="w-full p-4 border-b">
      <h1>Filter</h1>
      <input
        type="text"
        value={search}
        placeholder="Search"
        className="border outline-none"
        onChange={handleFilter}
      />
    </div>
  );
}

export default ShopFilter;
