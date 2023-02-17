import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { AlertDialog } from './alert-dialog';

test(`[AlertDialog Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<AlertDialog />);
  expect(screen.innerHTML).toBeTruthy();
});
