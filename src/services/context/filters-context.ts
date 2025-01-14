import { createContext } from "react";
import { TFilter, TUpdateSelectedFilters } from "./types";

export const FiltersContext = createContext({} as { filters: TFilter[], updateSelectedFilters: TUpdateSelectedFilters });
