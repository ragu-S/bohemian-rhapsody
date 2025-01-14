import { useEffect, useState } from "react";
import { getFilterOptions } from "../utils/get-filter-options";
import { TFilterQueryParams, TQueryResponse } from "./types";

export const useFilterOptions = (queryResponse: TQueryResponse[], selectedFilters: TFilterQueryParams | null) => {
  const [filters, setFilters] = useState( Object.values(getFilterOptions(queryResponse)));

  useEffect(() => {
    if(queryResponse.length > 0 && selectedFilters) {
      const filtersFromResponse = getFilterOptions(queryResponse);

      // Merge selected filters with query response
      Object.entries(selectedFilters).forEach(([selectedFilterKey, values]) => {
        if(selectedFilterKey in filtersFromResponse) {
          const { entries } = filtersFromResponse[selectedFilterKey];
          values.forEach(value => {
            entries.set(value, true);
          })
        }
      });

      const filtersAsArray = Object.values(filtersFromResponse);

      setFilters(filtersAsArray);
    }
  }, [selectedFilters, queryResponse]);

  return filters;
}