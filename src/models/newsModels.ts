export interface NewsModel {
  id: number;
  userId: number;
  title: string;
  content: string;
  publicationDate: string;
  image?: string;
  authorName?: string;
}

export interface CreateNewsModel {
  title: string;
  content: string;
}

export interface NewsTransportationModel {
  userId: number;
  image: File | null;
  creationDate: string;
  title: string;
  content: string;
}

export interface NewsPaginationModel
{
  page: number;
  pageSize: number;
  searchString?: string;
}