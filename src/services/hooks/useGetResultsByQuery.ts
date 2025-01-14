import { useEffect, useState } from "react";
import { getResultsByQuery } from "../api/discog-api";
import { TAPIError } from "./types";

export const useGetResultsByQuery = (options: any, onFail: (err: TAPIError) => void) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (options) {

      const getAlbumsByRequestParams = async () => {
        try {
          const { results } = await getResultsByQuery(options) as any;
          setResults(results);
        }
        catch (err) {
          onFail(err as TAPIError);
        }
      };

      getAlbumsByRequestParams();
    }

  }, [
    options
  ]);

  return results;
};
