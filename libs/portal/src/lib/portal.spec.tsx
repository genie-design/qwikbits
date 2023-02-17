import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Portal } from './portal';

test(`[Portal Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Portal />);
  expect(screen.innerHTML).toBeTruthy();
});
