export type TFilterType = Map<string, boolean>;

export type TFilter = {
  type: string;
  label: string;
  entries: Map<string, boolean>;
}

export type TUpdateSelectedFilters = (filter: { type: string, label: string }) => void;

export type TSetFavouriteAblum = (album: TFavouriteAlbum) => void;

export type TFavouriteAlbum = { id: number, type: string };