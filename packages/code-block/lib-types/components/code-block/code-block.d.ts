import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
interface CodeBlockProps {
    path?: string;
    language?: "markup" | "css" | "javascript" | "json" | "jsx" | "tsx";
    code: string;
}
export declare const CodeBlock: import("@builder.io/qwik").Component<CodeBlockProps>;
export {};
