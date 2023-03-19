import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Provider } from './provider';

test(`[Provider Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Provider />);
  expect(screen.innerHTML).toContain('Provider works!');
});
