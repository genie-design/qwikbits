import { ClassList } from "@builder.io/qwik";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
interface CodeBlockProps {
    path?: string;
    language?: "markup" | "css" | "javascript" | "json" | "jsx" | "tsx";
    code: string;
    class?: ClassList;
    codeClass?: ClassList;
}
export declare const CodeBlock: import("@builder.io/qwik").Component<CodeBlockProps>;
export {};
