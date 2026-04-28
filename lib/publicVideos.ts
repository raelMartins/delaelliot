/** Build a URL-safe path for files under `public/videos/`. */
export function videoPublicSrc(fileName: string): string {
  return `/videos/${encodeURIComponent(fileName)}`;
}
