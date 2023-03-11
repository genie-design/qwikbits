export const getUniqueId = (i = 36) => {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
    .toString(i)
    .toLowerCase();
};
export const useUniqueId = (i = 36) => {
  return getUniqueId(i);
};
