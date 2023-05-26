import type { ClassList, Signal } from '@builder.io/qwik';
import { Slot } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import type { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
import { QwikHTMLElement, serializeClass } from '@qwikbits/utils';
import { Link } from '@builder.io/qwik-city';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
type CTAProps = {
  text?: string;
  href?: string;
  class?: ClassList | Signal<ClassList>;
  variantProps?: VariantProps<typeof cta>;
  props?: QwikHTMLElementIntrinsic;
};
const cta = cva(['font-semibold'], {
  variants: {
    intent: {
      link: ['hover:underline underline-offset-2'],
      primary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
      ],
    },
    size: {
      small: ['text-sm'],
      medium: ['text-base'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: 'uppercase',
    },
    {
      intent: ['secondary', 'primary'],
      class: ['border', 'rounded'],
    },
  ],
  defaultVariants: {
    intent: 'link',
    size: 'medium',
  },
});
export default component$((props: CTAProps) => {
  const { text, href, variantProps } = props;
  const classes = `${cta(variantProps)} ${serializeClass(
    props.class || ''
  )} ${serializeClass(
    typeof props?.props === 'object' && 'value' in props.props
      ? props.props.value
      : props.props?.class
  )}`;

  return (
    <>
      {href ? (
        <Link {...props} class={classes} href={href}>
          {text}
          <Slot />
        </Link>
      ) : (
        <QwikHTMLElement tag="button" {...props} class={classes}>
          {text} <Slot />
        </QwikHTMLElement>
      )}
    </>
  );
});
