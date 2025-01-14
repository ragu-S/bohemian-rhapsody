import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getResultsByQuery } from "../api/discog-api";
import { CACHE_TIME, DEFAULT_DISCOG_FORMAT } from "../constants";
import { TAPIError, TFilterQueryParams, TQueryResponse } from "./types";

const getQueryParams = (options: TFilterQueryParams | null, searchQuery: string) => {
  if(searchQuery) {
    return new URLSearchParams({ query: searchQuery, format: DEFAULT_DISCOG_FORMAT }).toString();
  }
  else if(options) {
    return new URLSearchParams(options as unknown as Record<string, string>).toString();
  }
  return "";
}

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

  return data || [];
};
