export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const API_KEY = 'AIzaSyDyp71DFlWYm9S0h2yLky7hFEFjQwJpW_E';
export const MAX_RESULTS_INITIAL = 15;
export const SEARCH_URL = 'search';
export const VIDEOS_URL = 'videos';

export const HttpErrorMessages = {
  '400': 'Bad HTTP Request. Please check your API key',
  '403':
    'Access forbidden. The problem may occure if the quote for YOUTUBE API requests is expired for today. Try to visit this site tomorrow',
  '500': 'Internal server error. Please try later.',
  '503': 'Sorry, server is currently unavailable. Please come back later.',
};

export enum SearchParams {
  TYPE = 'video',
  WITH_STATS = 'snippet, statistics',
  WITHOUT_STATS = 'snippet',
}
