export const parseQueryParameters = (path: string): Map<string, string> => {
  const regex = /[?&]([^=#]+)=([^&#]*)/g;
  let match;
  const map = new Map();
  while ((match = regex.exec(path))) {
    map.set(match[1], match[2]);
  }
  return map;
};
