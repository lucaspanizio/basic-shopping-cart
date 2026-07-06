import { Button as ButtonPrimitive } from '@base-ui/react/button';

import { cn } from '@/lib/tailwindcss';

export function Button({ className, ...props }: ButtonPrimitive.Props) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn("group/button inline-flex size-8 shrink-0 items-center justify-center",
        "rounded-lg border border-border bg-background bg-clip-padding text-sm font-medium",
        "whitespace-nowrap transition-all outline-none select-none",
        "hover:bg-muted hover:text-foreground aria-expanded:bg-muted",
        "aria-expanded:text-foreground focus-visible:border-ring",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        "active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none",
        "disabled:opacity-50 dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}
