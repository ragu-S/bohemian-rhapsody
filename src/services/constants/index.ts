export const DEFAULT_DISCOG_COUNTRY = 'Canada';
export const DEFAULT_DISCOG_YEAR = '2024';
export const DEFAULT_DISCOG_FORMAT = 'Album';
export const LOGGER_ERROR_TYPES = {
  API_ERROR: "DISCOG_SEARCH_API_ERROR"
};
export const TFavouriteSessionStorageKey = "favouriteAlbums"

export const CACHE_TIME = 60 * 1000 * 5; // cache time of 5 mins
export const SEARCH_DEBOUNCE = 150; // search bar debounce

export const DEFAULT_FILTERS = {
  year: {
    type: 'year',
    label: 'Year',
    entries: []
  },
  genre: {
    type: 'genre',
    label: 'Genre',
    entries: []
  },
  artist: {
    type: 'artist',
    label: 'Artist',
    entries: []
  },
  country: {
    type: 'country',
    label: 'Country',
    entries: []
  },
  style: {
    type: 'style',
    label: 'Style',
    entries: []
  },
  format: {
    type: 'format',
    label: 'Format',
    entries: []
  }
};