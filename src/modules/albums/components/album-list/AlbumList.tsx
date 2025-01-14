import React from "react";
import { TAlbum, TAlbumList } from "./types";

const AlbumTile = React.memo(({ title, cover_image }: TAlbum) => {
  return <li className="group">
    <img src={cover_image} alt={title} className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
    <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
  </li>
});

const AlbumList = ({ albums }: { albums: TAlbumList }) => {
  return <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {
      albums.map(({ id, ...album }) => <AlbumTile key={id} {...album} />)
    }
  </ul>
};

export default React.memo(AlbumList);