import React from "react";
import { TAlbum, TAlbumList } from "./types";

const AlbumTile = React.memo(({ title, thumb }: TAlbum) => {
  return <li>
    <h3>{title}</h3>
    <img src={thumb} alt={title} ></img>
  </li>
});

const AlbumList = ({ albums }: { albums: TAlbumList }) => {
  return <ul>
    {
      albums.map(({ id, ...album }) => <AlbumTile key={id} {...album}  />)
    }
  </ul>
};

export default React.memo(AlbumList);