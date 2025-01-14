import { useEffect, useState } from "react";
import { getFilterOptions } from "../utils/get-filter-options";
import { TFilterQueryParams, TQueryResponse } from "./types";

/**
 * This hook handles merging the user selected options with the new response coming back from
 * the api, since the api doesn't keep track of the selections, the app needs to keep track of it
 */
export const useFilterOptions = (queryResponse: TQueryResponse[] | undefined, selectedFilters: TFilterQueryParams | null) => {
  const [filters, setFilters] = useState( Object.values(getFilterOptions(queryResponse)));

  useEffect(() => {
    if(queryResponse && queryResponse.length > 0 || selectedFilters) {
      const filtersFromResponse = getFilterOptions(queryResponse);
      
      if(selectedFilters) {
        // Merge selected filters with query response
        Object.entries(selectedFilters).forEach(([selectedFilterKey, values]) => {
          if(selectedFilterKey in filtersFromResponse) {
            const { entries } = filtersFromResponse[selectedFilterKey];
            values.forEach(value => {
              entries.set(value, true);
            })
          }
        });
      }

      const filtersAsArray = Object.values(filtersFromResponse);

      setFilters(filtersAsArray);
    }
  }, [selectedFilters, queryResponse]);

  return filters;
}