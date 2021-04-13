import React,{useState} from "react";
import {Search} from "./components/Search";
import {Results} from "./components/Results";

export const App = () =>{
  const [results,setResults] = useState([]);
  const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=2911792a";

  return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>

        <main>
          <Search
              apiUrl={apiUrl}
              onSearch={value => setResults(value)}
          />
          <Results results={results} />
        </main>
      </div>
  );
}

