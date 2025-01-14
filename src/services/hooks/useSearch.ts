import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { SEARCH_DEBOUNCE } from "../constants";

export const useSearch = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [query, setQuery] = useState("");

  // memoize the debounce 
  const debouncedSetQuery = useCallback(debounce(setQuery, SEARCH_DEBOUNCE), []);
  
  useEffect(() => {
    // use debounced query to control how often to updates the query and calls the api
    debouncedSetQuery(query);
  }, [query])

  return [query, setQuery];
}