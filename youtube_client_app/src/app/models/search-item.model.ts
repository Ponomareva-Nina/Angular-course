interface ThumbnailInterface {
  url: string;
  width: number;
  height: number;
}

interface SnippetInterface {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: ThumbnailInterface;
    medium: ThumbnailInterface;
    high: ThumbnailInterface;
    standard: ThumbnailInterface;
    maxres: ThumbnailInterface;
  };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface StatisticsInterface {
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
