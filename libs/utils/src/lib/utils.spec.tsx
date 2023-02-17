import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Utils } from './utils';

test(`[Utils Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Utils />);
  expect(screen.innerHTML).toBeTruthy();
});
