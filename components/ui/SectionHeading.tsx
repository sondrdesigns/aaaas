import * as React from "react";
import { cn } from "@/lib/utils";

const SectionHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    subtitle?: string;
    alignment?: "left" | "center";
  }
>(({ className, subtitle, alignment = "center", children, ...props }, ref) => (
  <div className={cn("mb-12", alignment === "center" ? "text-center" : "text-left", className)}>
    {subtitle && (
      <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-brand-accent">
        {subtitle}
      </span>
    )}
    <h2
      ref={ref}
      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-main"
      {...props}
    >
      {children}
    </h2>
  </div>
));
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
