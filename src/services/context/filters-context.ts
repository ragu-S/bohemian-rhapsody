import { createContext } from "react";
import { TFilter, TFilterOptions, TUpdateSelectedFilters } from "./types";

export const FiltersContext = createContext({} as { filters: TFilterOptions, updateSelectedFilters: TUpdateSelectedFilters });
