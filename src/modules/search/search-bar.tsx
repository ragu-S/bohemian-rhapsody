import { useState } from "react";
import { SearchIcon } from "../core/components/Icons/SearchIcon";

const SearchBar = ({ searchQuery, onSearch }: { searchQuery: string, onSearch: (query: string) => void }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const handleOnSearchInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  const handleOnClickSearch = () => {
    onSearch(inputValue);
  }

  return <div className="grid grid-cols-3">
    <div className="relative bg-white drop-shadow-lg p-3 inline-block rounded-lg inline-flex items-center col-span-2">
      <input
        className="w-full"
        value={inputValue}
        type="text"
        onChange={handleOnSearchInputText}
        placeholder="Discover albums"
      ></input>
      <button className="rounded-full bg-white drop-shadow-lg p-1 z-10 ml-1" onClick={handleOnClickSearch}>
        <SearchIcon />
      </button>
    </div>
  </div>
}


export default SearchBar;