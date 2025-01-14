import { createContext } from "react";
import { TFavouriteAlbum, TSetFavouriteAblum } from "./types";

export const FavouritesContext = createContext(
  {} as { favouriteAlbums: TFavouriteAlbum[], setFavouriteAlbum: TSetFavouriteAblum }
);
