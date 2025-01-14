import { useEffect, useState } from "react";
import { getFilterOptionsFromUrlParams } from "../utils/get-filter-options-from-url-params";
import { TUpdateSelectedFilters } from "../context/types";
import { TFilterQueryParams } from "./types";

export const useUpdateSelectedFilters = (): [TFilterQueryParams | null, TUpdateSelectedFilters] => {
  const [selectedFilters, setSelectedFilters] = useState(null as TFilterQueryParams | null);
  
  useEffect(() => {
    // On page load, check URL params, else add default filter options via History.pushState()
    const filterOptions = getFilterOptionsFromUrlParams();

    setSelectedFilters(filterOptions);
  }, []);

  
  const updateSelectedFilters = ({ type, label }: { type: string, label: string }) => {
    if (selectedFilters) {
      if (type in selectedFilters) {
        const selectedFilter = selectedFilters[type];

        if (selectedFilter.includes(label)) {
          if (selectedFilter.length > 1) {
            // filter out selected entry from list
            selectedFilters[type] = selectedFilter.filter(filterLabel => filterLabel !== label);
          }
          else {
            // Unselect selected type and remove entry from object attributes
            delete selectedFilters[type];
          }
        }
        else {
          selectedFilters[type].push(label)
        }

      }
      else {
        // add filter to selected filter list
        selectedFilters[type] = [label];
      }

      setSelectedFilters({ ...selectedFilters });
    }
  }

  return [selectedFilters, updateSelectedFilters];
}