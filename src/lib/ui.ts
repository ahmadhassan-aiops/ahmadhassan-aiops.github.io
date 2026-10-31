/*
 * Class recipes shared with the AI with Ahmad platform's UI kit (button, badge, card), so the two
 * sites look the same. Compose them with `cx`; don't pass classes that fight the recipe's own.
 */

export const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ');

const buttonBase =
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control text-small font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0';

const buttonVariant = {
  primary: 'bg-brand-solid text-on-brand hover:bg-brand-700 active:bg-brand-800',
  secondary: 'border border-line-strong bg-surface text-fg hover:bg-surface-hover',
  ghost: 'text-fg-muted hover:bg-surface-hover hover:text-fg',
  whatsapp: 'border border-line-strong bg-surface text-fg hover:bg-surface-hover [&_.wa-glyph]:text-whatsapp',
  /** On the brand-blue band: a white button and a white outline button. */
  inverse: 'bg-on-brand text-brand-700 hover:bg-brand-50',
  'inverse-outline': 'border border-on-brand/70 text-on-brand hover:bg-on-brand/10',
};

const buttonSize = {
  sm: 'h-9 px-3',
  md: 'h-10 px-4 pointer-coarse:h-11',
  lg: 'h-12 px-6 text-body',
  icon: 'size-10 pointer-coarse:size-11',
};

export function button(variant: keyof typeof buttonVariant = 'primary', size: keyof typeof buttonSize = 'md') {
  return cx(buttonBase, buttonVariant[variant], buttonSize[size]);
}

const badgeVariant = {
  neutral: 'border-line bg-surface-hover text-fg-muted',
  brand: 'border-transparent bg-brand-soft text-brand',
  // Outlined rather than tinted: success and warning text only reach 4.5:1 on a plain surface.
  success: 'border-success/40 bg-surface text-success',
  warning: 'border-warning/40 bg-surface text-warning',
  dashed: 'border-dashed border-line-strong text-fg-muted',
  outline: 'border-line text-fg-muted',
};

export function badge(variant: keyof typeof badgeVariant = 'neutral') {
  return cx(
    'inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-caption font-medium whitespace-nowrap [&_svg]:size-3.5',
    badgeVariant[variant],
  );
}

export const card = 'rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6';

/** The lift on hover used by the platform's stat and fact cards. */
export const lift =
  'transition-[translate,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
