export type TAlbum = {
    title: string;
    cover_image: string;
}

export type TAlbumList = (TAlbum & { id: string })[]