/**
 * Appends Unsplash optimization params to reduce payload size.
 * Unsplash serves full-resolution originals by default (2-4 MB); params cut this 80-90%.
 * Non-Unsplash URLs are returned unchanged.
 *
 * @param {string} url - The original image URL
 * @param {Object} [options]
 * @param {number} [options.width=1600] - Target width in pixels
 * @param {number} [options.quality=80] - JPEG quality (1-100)
 * @returns {string} Optimized URL
 */
export const optimizeImageUrl = (url, options = {}) => {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('images.unsplash.com')) return url;

  const { width = 1600, quality = 80 } = options;

  // Strip any existing query string to prevent conflicts with user-supplied params
  const baseUrl = url.split('?')[0];

  return `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop`;
};
