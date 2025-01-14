import React, { useContext } from "react";
import { TAlbum } from "../album-list/types";
import { FavouritesIcon } from "../../core/components/Icons/Favourites";
import { FavouritesContext } from "../../../services/context/favourites-context";
import { FavouritesCheckIcon } from "../../core/components/Icons/FavouritesCheckIcon";

const AlbumTile = ({ id, type, title, cover_image }: TAlbum) => {
  const { favouriteAlbums, setFavouriteAlbum } = useContext(FavouritesContext);
  const handleOnClickFavourites = () => {
    setFavouriteAlbum({ id, type })
  };
  const isFavourite = favouriteAlbums.find(album => id === album.id);

  return <li className="group relative">
    <button onClick={handleOnClickFavourites} className="absolute top-1 right-1 rounded-full bg-white drop-shadow-lg p-1 z-10">
      {isFavourite ? <FavouritesCheckIcon /> : <FavouritesIcon />}
    </button>
    <img src={cover_image} alt={title} className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
    <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
  </li>
};

export default React.memo(AlbumTile);