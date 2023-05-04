import { useState } from "react"
import csrfFetch from "../../../store/csrf";
import {AiOutlineSearch} from 'react-icons/ai';
import ProductIndex from "../../products/productindex";
import './search.css'


const SearchFunction = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await csrfFetch(`/api/search?query=${query}`)
    const json = await res.json()
    setResults(json)
  }

  console.log(results);

  return(
    <>
    <form className="search-function" onSubmit={(e)=> handleSearch(e)}>
      <AiOutlineSearch />
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button>Search</button>
    </form>
    </>
  )
}


export default SearchFunction