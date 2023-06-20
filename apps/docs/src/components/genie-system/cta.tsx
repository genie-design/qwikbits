import type { ClassList, Signal } from "@builder.io/qwik";
import { Slot } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { QwikHTMLElementIntrinsic } from "@qwikbits/utils";
import { QwikHTMLElement, serializeClass } from "@qwikbits/utils";
import type { LinkProps } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { t8y } from "./typography";
type CTAProps = {
  text?: string;
  href?: string;
  class?: ClassList | Signal<ClassList>;
  variantProps?: VariantProps<typeof cta>;
  typography?: VariantProps<typeof t8y>;
  props?: QwikHTMLElementIntrinsic;
  onClick$?: LinkProps["onClick$"];
};
const cta = cva(["font-semibold"], {
  variants: {
    intent: {
      link: ["hover:underline underline-offset-2"],
      primary: [
        "bg-sky-700",
        "text-white",
        "border-transparent",
        "hover:bg-sky-500",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
  },
  compoundVariants: [
    {
      intent: ["secondary", "primary"],
      class: ["border", "rounded", "px-4", "py-2"],
    },
  ],
  defaultVariants: {
    intent: "link",
  },
});
export default component$((props: CTAProps) => {
  const { text, href, variantProps, typography } = props;
  const classes = `${cta(variantProps)} ${t8y(typography)}} ${serializeClass(
    props.class || ""
  )} ${serializeClass(
    typeof props?.props === "object" && "value" in props.props
      ? props.props.value
      : props.props?.class
  )}`;

  return (
    <>
      {href ? (
        <Link href={href} {...props} class={classes}>
          {text}
          <Slot />
        </Link>
      ) : (
        <QwikHTMLElement
          onClick$={props.onClick$}
          tag="button"
          {...props}
          class={classes}
        >
          {text} <Slot />
        </QwikHTMLElement>
      )}
    </>
  );
});
