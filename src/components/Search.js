import React,{Fragment,useState} from "react"
import axios from "axios";

export const Search = ({apiUrl,onSearch}) => {
    const [input,setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = (e) => {
        let query = `${apiUrl}&s=${input}`;
        if (e.key === "Enter") {
            axios(query)
                .then(({ data }) => {
                    let results = data?.Search;
                    onSearch(results);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    return(
        <Fragment>
            <section className="searchbox-section">
                <input
                    className="searchbox"
                    type="text"
                    placeholder="Search for a movie..."
                    onChange={handleInput}
                    onKeyPress={handleSearch}
                />
            </section>
        </Fragment>
    )
}
