/**
 * Returns the pathname of a URL given its href and origin, normalized for comparisons.
 *
 * @param {string} href - the URL to extract the pathname from.
 * @param {string} [origin] - the origin to prefix the href with, if it's not a full URL.
 * @return {string} - the pathname of the URL.
 */
export declare const getNormalizedPathname: (href: string, origin?: string) => string;
