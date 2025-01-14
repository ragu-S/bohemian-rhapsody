import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getResultsByQuery } from "../api/discog-api";
import { CACHE_TIME } from "../constants";
import { TAPIError, TFilterQueryParams, TQueryResponse } from "./types";

/**
 * This helper function handles deciding how to parse the query options depending on whether
 * its a search query, from user entering a search term in the search bar, or a filter selection
 */
const getQueryParams = (options: TFilterQueryParams | null, searchQuery: string) => {
  if(searchQuery) {
    return new URLSearchParams({ query: searchQuery, ...options }).toString();
  }
  else if(options) {
    return new URLSearchParams(options as unknown as Record<string, string>).toString();
  }
  return "";
}

/**
 * this hook handles calling the api via getResultsByQuery, it uses React query to optimize the api calls via caching
 * the api will only be called when a valid query passed to it
 */
export const useGetResultsByQuery = (options: TFilterQueryParams | null, searchQuery: string, onFailure: (err: TAPIError) => void) => {
  const urlGetParams = getQueryParams(options, searchQuery);

  const { data, error } = useQuery({
    queryKey: ['albums', urlGetParams], queryFn: async (): Promise<TQueryResponse[]> => {
      if (urlGetParams) {
        const { results } = await getResultsByQuery(urlGetParams) as any;
        return results;
      }
      return [] as unknown as TQueryResponse[];
    },
    staleTime: CACHE_TIME
  });

  useEffect(() => {
    if(error) {
      onFailure(error)
    }
  }, [error]);

  return data;
};
