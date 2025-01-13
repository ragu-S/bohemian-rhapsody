import { useEffect, useState } from "react";
import { getAllAlbums } from "../discog-api";
import { DEFAULT_DISCOG_YEAR, DEFAULT_DISCOG_COUNTRY } from "../constants";
import { TAPIError } from "./types";

export const useAlbums = (options: any, onFail: (err: TAPIError) => void) => {
  const { country = DEFAULT_DISCOG_COUNTRY, year = DEFAULT_DISCOG_YEAR } = options || {};
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbumsByRequestParams = async () => {
      try {
        const { results } = await getAllAlbums({ country, year}) as any;
        setAlbums(results);
      }
      catch(err) {
        onFail(err as TAPIError);
      }
    };

    getAlbumsByRequestParams();

  }, [ 
    country,
    year,
    // genre
    // genre,
    // label,
    // title,
    // releaseTitle,
    // artist,
    // track
  ]);

  return albums;
};
