import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Matches a URL path to its prefetchable chunk import function.
 * Country guide and field guide detail pages share a single chunk each,
 * so any sub-path resolves to the parent chunk's import.
 */
const resolvePrefetch = (to) => {
  if (typeof window === 'undefined' || !window.__gomatePrefetch) return null;
  const table = window.__gomatePrefetch;

  if (table[to]) return table[to];

  if (to.startsWith('/country-guides/')) return table['/country-guides/'];
  if (to.startsWith('/field-guide/')) return table['/field-guide/'];

  return null;
};

const prefetched = new Set();

/**
 * Drop-in replacement for react-router-dom's Link that prefetches the target
 * route's JavaScript chunk on hover/focus. Makes route transitions feel instant
 * on warm connections — by the time the user clicks, the chunk is cached.
 */
const PrefetchLink = ({ to, children, onMouseEnter, onFocus, ...rest }) => {
  const handlePrefetch = () => {
    if (prefetched.has(to)) return;
    const importFn = resolvePrefetch(to);
    if (importFn) {
      prefetched.add(to);
      // Fire and forget — browser caches the chunk, no error surface needed.
      importFn().catch(() => prefetched.delete(to));
    }
  };

  return (
    <Link
      to={to}
      onMouseEnter={(e) => { handlePrefetch(); onMouseEnter?.(e); }}
      onFocus={(e) => { handlePrefetch(); onFocus?.(e); }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default PrefetchLink;
