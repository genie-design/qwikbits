import { cva } from 'class-variance-authority';

export const t8y = cva('', {
  variants: {
    size: {
      'text-xs': ['text-xs', 'tracking-[0.055em]'],
      'text-sm': ['text-sm', 'tracking-[0.05em]'],
      'text-base': ['text-base', 'tracking-[0.045em]'],
      'text-lg': ['text-lg', 'tracking-[0.04em]'],
      'text-xl': ['text-xl', 'tracking-[0.03em]'],
      'text-2xl': ['text-2xl', 'tracking-[0.025em]'],
      'text-3xl': ['text-3xl', 'tracking-[0.02em]'],
      'text-4xl': ['text-4xl', 'tracking-[0.015em]'],
      'text-5xl': ['text-5xl', 'tracking-[0.01em]'],
      'text-6xl': ['text-6xl'],
      'text-7xl': ['text-7xl'],
      'text-8xl': ['text-8xl'],
      'text-9xl': ['text-9xl'],
    },
  },
  defaultVariants: {
    size: 'text-base',
  },
});
