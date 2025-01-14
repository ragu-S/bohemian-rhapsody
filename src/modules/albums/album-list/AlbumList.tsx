import React from "react";
import AlbumTile from "../album-tile/AlbumTile";
import { TAlbum } from "./types";

const AlbumList = ({ albums }: { albums: TAlbum[] }) => {
  return <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {
      albums?.map(({ id, ...album }) => <AlbumTile id={id} key={id} {...album} />)
    }
  </ul>
};

export default React.memo(AlbumList);