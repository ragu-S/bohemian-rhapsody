import AlbumList from './modules/albums/components/album-list/AlbumList';
import { useGetResultsByQuery } from './services/hooks/useGetResultsByQuery';

import Filters from './modules/filters/Filters';
import TopNavigation from './modules/top-navigation/TopNavigation';
import { FiltersContext } from './services/context/filters-context';
import { useEffect, useState } from 'react';
import { getFilterOptionsFromUrlParams } from './services/utils/get-filter-options-from-url-params';
import { TFilterQueryParams } from './services/hooks/types';
import { useFilterOptions } from './services/hooks/useFilterOptions';

import './App.css'

function App() {
  const onFailure = (err: any) => {
    console.error(err);
  }

  const [selectedFilters, setSelectedFilters] = useState(null as TFilterQueryParams | null);
  const queryResponse = useGetResultsByQuery(selectedFilters, onFailure);
  const filters = useFilterOptions(queryResponse, selectedFilters);

  useEffect(() => {
    // On page load, check URL params, else add default filter options via History.pushState()
    const filterOptions = getFilterOptionsFromUrlParams();

    setSelectedFilters(filterOptions);
  }, []);

  const updateSelectedFilters = ({ type, label }: { type: string, label: string, value: string }) => {
    if(selectedFilters) {
      if(type in selectedFilters) {
        const selectedFilter = selectedFilters[type];

        if(selectedFilter.includes(label)) {
          if(selectedFilter.length > 1) {
            // filter out selected entry from list
            selectedFilters[type] =  selectedFilter.filter(filterLabel => filterLabel !== label);
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

  return (
    <>
      <main className="bg-white">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Albums</h1>

          <div className="flex items-center">
            <TopNavigation />
          </div>

        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <FiltersContext.Provider value={{ filters, updateSelectedFilters }}>
              <Filters filters={filters} />
            </FiltersContext.Provider>
            <div className="lg:col-span-3">
              <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                <AlbumList albums={queryResponse} />
              </section>
            </div>
          </section>
        </section>

      </main>
    </>
  )
}

export default App
