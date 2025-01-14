import AlbumList from './modules/albums/album-list/AlbumList';
import Filters from './modules/filters/Filters';
import SearchBar from './modules/search/search-bar';
import { useSearch } from './services/hooks/useSearch';
import { FiltersContext } from './services/context/filters-context';
import { FavouritesContext } from './services/context/favourites-context';
import { useUpdateSelectedFilters } from './services/hooks/useUpdateSelectedFilters';
import { useFilterOptions } from './services/hooks/useFilterOptions';
import { useGetResultsByQuery } from './services/hooks/useGetResultsByQuery';
import { useFavouritesAlbums } from './services/hooks/useFavouritesAlbums';
import { customLoggerFunction } from './services/utils/custom-logger';
import { LOGGER_ERROR_TYPES } from './services/constants';
import { TAPIError } from './services/hooks/types';

import './App.css'

function App() {
  const onFailure = (err: TAPIError) => {
    customLoggerFunction(LOGGER_ERROR_TYPES.API_ERROR, err);
  }

  const [selectedFilters, updateSelectedFilters] = useUpdateSelectedFilters();
  const [searchQuery, setSearchQuery] = useSearch();
  const queryResponse = useGetResultsByQuery(selectedFilters, searchQuery, onFailure);
  const filters = useFilterOptions(queryResponse, selectedFilters);
  const [favouriteAlbums, updateFavouriteAlbums] = useFavouritesAlbums();

  return (
    <>
      <main className="bg-white">
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Albums</h1>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <FiltersContext.Provider value={{ filters, updateSelectedFilters }}>
                <Filters filters={filters} />
              </FiltersContext.Provider>
              <div className="lg:col-span-3">
                <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                  <FavouritesContext.Provider value={{ favouriteAlbums, setFavouriteAlbum: updateFavouriteAlbums }}>
                    <AlbumList albums={queryResponse} />
                  </FavouritesContext.Provider>
                </section>
              </div>
            </section>
        </section>

      </main>
    </>
  )
}

export default App
