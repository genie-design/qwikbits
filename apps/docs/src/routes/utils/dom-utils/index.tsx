import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/dom-utils">
          <h2>Dom Utils</h2>
        </Cta>
        <h5>Functions that can help create accessible components</h5>
        <p>
          This library provides a set of utility functions that can help you
          create accessible components.
        </p>
        <h5>Exports:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="tsx"
            code={`/**
 * Set the focus to the first element with \`autofocus\` with the element or the
 * element itself.
 */
export function moveFocusToDialog(el: HTMLElement, focusElement = false) {
  let focused = el.querySelector("[autofocus]") as HTMLElement;

  if (!focused && focusElement) {
    focused = el;
  }
  focused?.focus();
}

/**
 * Get the first and last focusable elements in a given tree.
 */
export function getFocusableEdges(el: HTMLElement) {
  // Check for a focusable element within the subtree of \`el\`.
  const first = findFocusableElement(el, true);

  // Only if we find the first element do we need to look for the last one. If
  // there’s no last element, we set \`last\` as a reference to \`first\` so that
  // the returned array is always of length 2.
  const last = first ? findFocusableElement(el, false) || first : null;

  return [first, last] as const;
}
/**
 * Get the active element, accounting for Shadow DOM subtrees.
 */
export function getActiveElement(
  root: Document | ShadowRoot = document
): Element | null {
  const activeEl = root.activeElement;

  if (!activeEl) return null;

  // If there’s a shadow root, recursively find the active element within it.
  // If the recursive call returns null, return the active element
  // of the top-level Document.
  if (activeEl.shadowRoot)
    return getActiveElement(activeEl.shadowRoot) || document.activeElement;

  // If not, we can just return the active element
  return activeEl;
}
/**
 * Trap the focus inside the given element.
 */
export function trapTabKey(el: HTMLElement, event: KeyboardEvent) {
  const [firstFocusableChild, lastFocusableChild] = getFocusableEdges(el);

  // If there are no focusable children in the dialog, prevent the user from
  // tabbing out of it
  if (!firstFocusableChild) return event.preventDefault();

  const activeElement = getActiveElement();

  // If the SHIFT key is pressed while tabbing (moving backwards) and the
  // currently focused item is the first one, move the focus to the last
  // focusable item from the dialog element
  if (event.shiftKey && activeElement === firstFocusableChild) {
    lastFocusableChild?.focus();
    event.preventDefault();
  }

  // If the SHIFT key is not pressed (moving forwards) and the currently focused
  // item is the last one, move the focus to the first focusable item from the
  // dialog element
  else if (!event.shiftKey && activeElement === lastFocusableChild) {
    firstFocusableChild.focus();
    event.preventDefault();
  }
}`}
          />
        </div>
      </div>
    </div>
  );
});
