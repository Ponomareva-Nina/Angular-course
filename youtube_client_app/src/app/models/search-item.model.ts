interface ThumbnailItemInterface {
  url: string;
  width: number;
  height: number;
}

interface ThumbnailsInterface {
  default: ThumbnailItemInterface;
  medium: ThumbnailItemInterface;
  high: ThumbnailItemInterface;
  standard: ThumbnailItemInterface;
  maxres: ThumbnailItemInterface;
}

interface LocalizationInterface {
  title: string;
  description: string;
}

interface SnippetInterface {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsInterface;
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizationInterface;
  defaultAudioLanguage: string;
}

export interface StatisticsInterface {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface SearchItemInterface {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetInterface;
  statistics: StatisticsInterface;
}
