import { ClassList, component$, useStyles$ } from '@builder.io/qwik';
import prismjs from 'prismjs';
// Set to global so that prism language plugins can find it.
const _global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof global !== 'undefined' && global) ||
  (typeof self !== 'undefined' && self) ||
  (typeof this !== 'undefined' && this) ||
  (typeof window !== 'undefined' && window);
(_global as any).PRISM = prismjs;
import 'prismjs/components/prism-jsx'; // needs PRISM global
import 'prismjs/components/prism-tsx'; // needs PRISM global
import styles from './code-block.css?inline';
interface CodeBlockProps {
  path?: string;
  language?:
    | 'markup'
    | 'css'
    | 'javascript'
    | 'json'
    | 'jsx'
    | 'tsx'
    | 'typescript';
  code: string;
  class?: ClassList;
  codeClass?: ClassList;
}

export const CodeBlock = component$((props: CodeBlockProps) => {
  useStyles$(styles);
  let language = props.language;
  if (!language && props.path && props.code) {
    const ext = props.path.split('.').pop();
    language =
      ext === 'js' || ext === 'json'
        ? 'javascript'
        : ext === 'html'
        ? 'markup'
        : ext === 'css'
        ? 'css'
        : undefined;
  }

  if (language && prismjs.languages[language]) {
    const highlighted = prismjs.highlight(
      props.code,
      prismjs.languages[language],
      language
    );
    const className = `language-${language}`;
    return (
      <pre class={[className, props.class]}>
        <code
          class={[className, props.codeClass]}
          dangerouslySetInnerHTML={highlighted}
        />
      </pre>
    );
  }
  return null;
});
