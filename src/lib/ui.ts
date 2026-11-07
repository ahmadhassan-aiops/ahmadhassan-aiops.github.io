/*
 * Class recipes for every repeated control: buttons, badges, chips, cards and icon tiles. Compose them
 * with `cx`; don't pass classes that fight the recipe's own (there is no tailwind-merge here).
 */

export const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ');

const buttonBase =
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium transition-[background-color,border-color,color,box-shadow] duration-150 [&_svg]:size-4 [&_svg]:shrink-0';

const buttonVariant = {
  primary: 'bg-brand-solid text-on-brand hover:bg-brand-700 hover:shadow-brand',
  secondary: 'border border-line-strong bg-surface text-fg hover:border-brand/50 hover:bg-surface-hover',
  ghost: 'text-fg-muted hover:bg-surface-hover hover:text-fg',
  /** On the terracotta band: a white button and a white outline button. */
  inverse: 'bg-on-brand text-brand-700 hover:bg-brand-50',
  'inverse-outline': 'border border-on-brand/70 text-on-brand hover:bg-on-brand/10',
};

const buttonSize = {
  sm: 'h-9 px-3 text-small',
  md: 'h-11 px-4 text-small',
  lg: 'h-12 px-6 text-body',
  xl: 'h-14 px-7 text-body',
  icon: 'size-11 text-small',
};

export function button(variant: keyof typeof buttonVariant = 'primary', size: keyof typeof buttonSize = 'md') {
  return cx(buttonBase, buttonVariant[variant], buttonSize[size]);
}

const badgeVariant = {
  neutral: 'border-line bg-surface-hover text-fg-muted',
  brand: 'border-transparent bg-brand-soft text-brand',
  sage: 'border-transparent bg-sage-soft text-sage',
  dashed: 'border-dashed border-line-strong text-fg-muted',
  outline: 'border-line text-fg-muted',
};

export function badge(variant: keyof typeof badgeVariant = 'neutral') {
  return cx(
    'inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-caption font-medium whitespace-nowrap [&_svg]:size-3.5',
    badgeVariant[variant],
  );
}

/** Skill and tool chips (Expertise, VerdictRx stack, project tags). Logos inside use `chipLogo`. */
export function chip(variant: 'default' | 'brand' = 'default') {
  return cx(
    'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 text-small whitespace-nowrap',
    variant === 'brand' ? 'border-brand/30 bg-brand-soft font-medium text-brand' : 'border-line bg-surface text-fg-muted',
  );
}
export const chipLogo = 'size-3.5 text-fg-subtle';

/** Cards: `default` for grids, `feature` for large panels (VerdictRx, the platform band, featured work). */
export function card(variant: 'default' | 'feature' = 'default') {
  return variant === 'feature'
    ? 'rounded-feature border border-line bg-surface p-6 shadow-sm sm:p-8 lg:p-10'
    : 'rounded-card border border-line bg-surface p-6 shadow-sm';
}

/** The hover state shared by interactive cards: warmer border, soft shadow and a 2px lift. */
export const lift =
  'transition-[translate,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0';

/** The square icon holder: brand (earned), neutral (in progress), sage (next goal) or solid. */
export function iconTile(variant: 'brand' | 'neutral' | 'sage' | 'solid' = 'brand') {
  return cx(
    'grid size-10 shrink-0 place-items-center rounded-xl [&_svg]:size-5',
    variant === 'brand' && 'bg-brand-soft text-brand',
    variant === 'neutral' && 'border border-dashed border-line-strong bg-surface-hover text-fg-muted',
    variant === 'sage' && 'bg-sage-soft text-sage',
    variant === 'solid' && 'bg-brand-solid text-on-brand',
  );
}

/** Section eyebrow: an uppercase label in the brand colour (never mono). */
export const eyebrow = 'text-caption font-semibold tracking-eyebrow text-brand uppercase';

export const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
