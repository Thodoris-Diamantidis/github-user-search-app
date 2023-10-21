import React, { useState } from "react";

export default function SearchBar({ setGithubUser, fetchData }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="github__searchbar">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={searchInput}
          onChange={(event) => {
            event.preventDefault();
            setSearchInput(event.target.value);
            setGithubUser(event.target.value);
          }}
        />
        <button onClick={fetchData}>Search</button>
      </div>
    </div>
  );
}
