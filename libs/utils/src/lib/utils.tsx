export const useUniqueId = (i = 36) => {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
    .toString(i)
    .toLowerCase();
};
