import { ReactNode } from "react";
import { filters } from "../mocks/filters-mocks";
import { FavouritesContext } from "../services/context/favourites-context";
import { FiltersContext } from "../services/context/filters-context";

const TestContextWrapper = ({ children }: { children: ReactNode }) => {
  return <FiltersContext.Provider value={{ filters, updateSelectedFilters: () => {}}}>
    <FavouritesContext.Provider value={{ favouriteAlbums: [], setFavouriteAlbum: () => { } }}>
      {children}
    </FavouritesContext.Provider>
  </FiltersContext.Provider>
};

export default TestContextWrapper;