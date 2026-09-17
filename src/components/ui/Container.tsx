import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("site-container mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8", className)} {...props} />;
}
