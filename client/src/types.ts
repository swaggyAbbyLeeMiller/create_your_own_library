export interface OpenLibraryDoc
{
    key: string;
    title: string;
    author: string;
    first_publish_year?: number;
    cover_id?: number;
}

export interface LibraryBook{
    title: string;
    author: string;
    year?: number;
    coverID?: number;
    id: string;  
}