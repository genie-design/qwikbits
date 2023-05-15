import { ClassList } from "@builder.io/qwik";

export const serializeClass = (obj: ClassList): string => {
  if (!obj) {
    return "";
  }
  if (typeof obj === "string") {
    return obj.trim();
  }

  if (Array.isArray(obj)) {
    return obj.reduce((result: string, o) => {
      const classList = serializeClass(o);
      return classList
        ? result
          ? `${result} ${classList}`
          : classList
        : result;
    }, "");
  }

  return Object.entries(obj).reduce(
    (result, [key, value]) =>
      value ? (result ? `${result} ${key.trim()}` : key.trim()) : result,
    ""
  );
};
