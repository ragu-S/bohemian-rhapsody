export type TAPIError = {
  message: string;
  status?: number;
}

export type TQueryResponse = {
  id: string;
  country: string;
  cover_image: string;
  format: string[];
  genre: string[];
  label: string[];
  style: string[];
  title: string;
  year: string;
}

export type TFilterQueryParams = Record<string, string[]>;