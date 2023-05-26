import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Menu from '../../components/menu/menu';

export default component$(() => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-8 m-8">
      <Menu
        items={[
          { text: 'Getting Started', href: '/headless-ui/' },
          { text: 'Collapse', href: '/headless-ui/collapse' },
          { text: 'Dialog', href: '/headless-ui/dialog/' },
          { text: 'Dropdown', href: '/headless-ui/dropdown/' },
          { text: 'Dom Utils', href: '/utils/dom-utils' },
          { text: 'Helpers', href: '/utils/helpers' },
        ]}
      />
      <article>
        <Slot />
      </article>
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
