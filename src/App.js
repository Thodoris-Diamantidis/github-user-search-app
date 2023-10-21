import React from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <main>
      <article className="github">
        <div className="github_heading">
          <p>devfinder</p>
          <button>Light</button>
        </div>
        <SearchBar />
        <div>API RESULTS</div>
      </article>
    </main>
  );
}
