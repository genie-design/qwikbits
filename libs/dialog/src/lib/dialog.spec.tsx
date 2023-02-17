import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Dialog } from './dialog';

test(`[Dialog Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Dialog id="test" title={'title'} />);
  expect(screen.innerHTML).toBeTruthy();
});
