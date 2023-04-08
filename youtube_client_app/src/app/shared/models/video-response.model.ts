import { SnippetInterface, StatisticsInterface } from './search-item.model';

export interface VideoResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetInterface;
  statistics: StatisticsInterface;
}

export interface VideoResponseInterface {
  kind: string;
  etag: string;
  items: VideoResponseItem[];
}
