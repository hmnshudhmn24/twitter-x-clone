export function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export function timeAgo(dateStr) {
  return dateStr; // already formatted in mock data
}

export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
