export type TAlbum = {
    title: string;
    thumb: string;
}

export type TAlbumList = (TAlbum & { id: string })[]