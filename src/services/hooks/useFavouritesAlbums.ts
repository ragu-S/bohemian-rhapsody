import { useEffect, useState } from "react";
import { TFavouriteSessionStorageKey } from "../constants";
import { TFavouriteAlbum, TSetFavouriteAblum } from "../context/types";

const getFavouriteAlbumsFromSessionStorage = () => {
  const savedFavourites = sessionStorage.getItem(TFavouriteSessionStorageKey);
  if(savedFavourites) {
    try {
      return JSON.parse(savedFavourites) as TFavouriteAlbum[];
    }
    catch(err) {}
  }
  return [] as TFavouriteAlbum[];
}

export const useFavouritesAlbums = (): [TFavouriteAlbum[], TSetFavouriteAblum] => {
  const [favouriteAlbums, setFavouriteAlbum] = useState(getFavouriteAlbumsFromSessionStorage());
  
  useEffect(() => {
    sessionStorage.setItem(TFavouriteSessionStorageKey, JSON.stringify(favouriteAlbums));
  }, [favouriteAlbums])

  const updateFavouriteAlbums = ({id, type}: TFavouriteAlbum) => {
    const isAddedAleady = favouriteAlbums.find((album) => album.id === id);

    if(isAddedAleady) {
      setFavouriteAlbum(favouriteAlbums.filter(album => album.id !== id));
    }
    else {
      setFavouriteAlbum([...favouriteAlbums, {id, type}]);
    }
  };

 

  return [favouriteAlbums, updateFavouriteAlbums]
};