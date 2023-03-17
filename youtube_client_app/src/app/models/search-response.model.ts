import { SearchItemInterface } from './search-item.model';

interface PageInfoUnterface {
  totalResults: number;
  resultsPerPage: number;
}

export default interface SearchResponseInterface {
  kind: string;
  etag: string;
  pageInfo: PageInfoUnterface;
  items: SearchItemInterface[];
}
