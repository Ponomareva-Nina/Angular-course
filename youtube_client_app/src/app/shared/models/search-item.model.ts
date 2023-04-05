export interface ThumbnailItemInterface {
  url: string;
  width: number;
  height: number;
}

export interface ThumbnailsInterface {
  default: ThumbnailItemInterface;
  medium: ThumbnailItemInterface;
  high: ThumbnailItemInterface;
  standard?: ThumbnailItemInterface;
  maxres?: ThumbnailItemInterface;
}

export interface LocalizationInterface {
  title: string;
  description: string;
}

export interface SnippetInterface {
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
  favoriteCount: string;
  commentCount: string;
}
