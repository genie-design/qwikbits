export const useUniqueId = () => {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
    .toString(36)
    .toLowerCase();
};
