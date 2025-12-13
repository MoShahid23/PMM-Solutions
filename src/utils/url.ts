const base = (import.meta.env.BASE_URL || '/') as string;

/**
 * Prefix internal links with the configured BASE_URL so the site works
 * when hosted under a sub-path (e.g. GitHub Pages project sites).
 */
export const withBase = (path = '/') => {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath =
    !path || path === '/'
      ? '/'
      : path.startsWith('/')
        ? path
        : `/${path}`;

  // Avoid returning an empty string which would break absolute links.
  return normalizedBase ? `${normalizedBase}${normalizedPath}` : normalizedPath;
};



