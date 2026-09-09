import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="font-display uppercase tracking-menu text-4xl sm:text-5xl leading-[1.05] text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-muted text-base sm:text-lg">{subtitle}</p>
      )}
      <div
        className={cn(
          "hairline mt-6 w-24",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
