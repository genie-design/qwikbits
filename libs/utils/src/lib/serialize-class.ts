import { ClassList, Signal } from '@builder.io/qwik';

export const serializeClass = (obj: ClassList | Signal<ClassList>): string => {
  if (!obj) {
    return '';
  }
  if (typeof obj === 'string') {
    return obj.trim();
  }

  if (typeof obj === 'object' && 'value' in obj) {
    obj = (obj as Signal<ClassList>).value;
  }

  if (Array.isArray(obj)) {
    return obj.reduce((result: string, o) => {
      const classList = serializeClass(o);
      return classList
        ? result
          ? `${result} ${classList}`
          : classList
        : result;
    }, '');
  }

  return Object.entries(obj as Record<string, string>).reduce(
    (result, [key, value]) =>
      value ? (result ? `${result} ${key.trim()}` : key.trim()) : result,
    ''
  );
};
