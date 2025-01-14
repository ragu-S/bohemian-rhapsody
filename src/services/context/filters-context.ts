import { createContext } from "react";
import { TFilterOptions, TUpdateSelectedFilters } from "./types";

export const FiltersContext = createContext({} as { filters: TFilterOptions, updateSelectedFilters: TUpdateSelectedFilters });
