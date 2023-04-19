/**
 * Set the focus to the first element with `autofocus` with the element or the
 * element itself.
 */
export declare function moveFocusToDialog(el: HTMLElement, focusElement?: boolean): void;
/**
 * Get the first and last focusable elements in a given tree.
 */
export declare function getFocusableEdges(el: HTMLElement): readonly [HTMLElement | null, HTMLElement | null];
/**
 * Get the active element, accounting for Shadow DOM subtrees.
 * @author Cory LaViska
 * @see: https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
 */
export declare function getActiveElement(root?: Document | ShadowRoot): Element | null;
/**
 * Trap the focus inside the given element, can only be used inside manually added synchronous events due to conditional prevent default
 */
export declare function trapTabKey(el: HTMLElement, event: KeyboardEvent): void;
