import { getURL } from './api';
export function fetchMedia(media: { url: string }) {
  const imageUrl = media?.url?.startsWith('/') ? getURL(media.url) : media.url;
  return imageUrl;
}
