import { SnippetInterface } from './search-item.model';

interface PageInfoUnterface {
  totalResults: number;
  resultsPerPage: number;
}

interface IdInterface {
  kind: string;
  videoId: string;
}

export interface SearchResponseItem {
  kind?: string;
  etag?: string;
  id: IdInterface;
  snippet?: SnippetInterface;
}

export interface SearchResponseInterface {
  kind: string;
  etag: string;
  pageInfo: PageInfoUnterface;
  items: SearchResponseItem[];
}
