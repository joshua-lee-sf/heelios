import { useState } from "react"
import {AiOutlineSearch} from 'react-icons/ai';
import { useHistory } from "react-router-dom";
import './search.css'


const SearchFunction = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');



  const handleSearch = async (e) => {
    e.preventDefault();
    history.push(`/search?query=${query}`)
  }

  return(
    <>
    <form className="search-function" onSubmit={(e)=> handleSearch(e)}>
      <AiOutlineSearch id="search-icon"/>
      <input className="searchbox" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..."/>
      <button>Search</button>
    </form>
    </>
  )
}


export default SearchFunction