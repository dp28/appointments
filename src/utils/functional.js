export function identity(x) {
  return x;
}

export function inclusiveRange(start, inclusiveEnd) {
  const size = inclusiveEnd - start;
  if (size < 1) {
    return [];
  }
  const range = rangeFromZero(size);
  return start === 0 ? range : range.map(n => n + start);
}

function rangeFromZero(inclusiveEnd) {
  return [...Array(inclusiveEnd + 1).keys()];
}
