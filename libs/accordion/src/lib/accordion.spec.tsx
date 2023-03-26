import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Accordion } from './accordion';

test(`[Accordion Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Accordion />);
  expect(screen.innerHTML).toContain('Accordion works!');
});
