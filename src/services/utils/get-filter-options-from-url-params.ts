import { DEFAULT_DISCOG_YEAR, DEFAULT_DISCOG_COUNTRY, DEFAULT_DISCOG_FORMAT } from "../constants";
import { TFilterQueryParams } from "../hooks/types";

export const getFilterOptionsFromUrlParams = (): TFilterQueryParams => {
  if(window.location.search) {
    return Object.fromEntries(new URLSearchParams(window.location.search).entries()) as unknown as TFilterQueryParams;
  }
  return {
    year: [DEFAULT_DISCOG_YEAR],
    country: [DEFAULT_DISCOG_COUNTRY],
    format: [DEFAULT_DISCOG_FORMAT]
  } as TFilterQueryParams;
};