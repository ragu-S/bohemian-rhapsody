import { DEFAULT_FILTERS } from "../constants";
import { TFilter } from "../context/types";
import { TQueryResponse } from "../hooks/types";

export function appendFilterEntry(filter: string[], entry: string) {
  if(!entry) return filter;

  if(!filter.includes(entry)) {
    filter.push(entry);
  }

  return filter;
}

export function appendArrayFilterEntries(filter: string[], entries: string[]) {
  entries.forEach(entry => appendFilterEntry(filter, entry));
}

export const getFilterOptions = (results: TQueryResponse[] | undefined): Record<string, TFilter>  => {
  const groupedFilteredOptions = results ? results.reduce((filterList, { year, genre, title, country, style, format }) => {
    appendFilterEntry(filterList['year'].entries, year);

    appendArrayFilterEntries(filterList['genre'].entries, genre)

    // Artist names aren't provided as a dedicated field, currently only appears to be avaiable in the title and release/master api 
    appendFilterEntry(filterList['artist'].entries, title.split('-')[0]);

    appendFilterEntry(filterList['country'].entries, country);

    appendArrayFilterEntries(filterList['style'].entries, style);

    appendArrayFilterEntries(filterList['format'].entries, format);

    return filterList;
  }, DEFAULT_FILTERS) : DEFAULT_FILTERS;

  // We sort the options alpabetically
  const sortedGroupedFilteredOptions = Object.entries(groupedFilteredOptions).reduce((sortedFilterOptions, [key, { type, label, entries }]) => {
    // Default string sort
    entries.sort();
    
    sortedFilterOptions[key] = { type, label, entries: new Map(entries.map((entry: string) => [entry, false])) }
    return sortedFilterOptions;
  }, {} as Record<string, TFilter>);

  return sortedGroupedFilteredOptions;
};

