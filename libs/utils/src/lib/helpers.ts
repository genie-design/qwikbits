/**
 * Returns the pathname of a URL given its href and origin, normalized for comparisons.
 *
 * @param {string} href - the URL to extract the pathname from.
 * @param {string} [origin] - the origin to prefix the href with, if it's not a full URL.
 * @return {string} - the pathname of the URL.
 */
export const getNormalizedPathname = (href: string, origin?: string) => {
  if (origin && !href.includes('://')) {
    href = `${origin}${href.startsWith('/') ? href : `/${href}`}`;
  }
  let pathname = href;
  try {
    const url = new URL(href);
    pathname = url.pathname;
  } catch (e) {
    pathname = href;
  }
  pathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return pathname;
};
