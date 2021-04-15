import React, { useState } from "react";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>

      <main>
        <Search onSearch={(value) => setResults(value)} />
        <Results results={results} />
      </main>
    </div>
  );
};
