import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  variant?: "header" | "full";
  className?: string;
};

const logoByVariant = {
  header: {
    src: siteConfig.brand.logoFull,
    width: 1100,
    height: 270,
    className: "w-[188px] min-[380px]:w-[205px] sm:w-[238px]",
  },
  full: {
    src: siteConfig.brand.logoFull,
    width: 1100,
    height: 270,
    className: "w-[270px] max-w-full",
  },
} as const;

export function BrandLogo({ variant = "header", className }: BrandLogoProps) {
  const logo = logoByVariant[variant];

  return (
    <Link
      href="/"
      aria-label="Smiles & Giggles Foundation home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt=""
        aria-hidden="true"
        priority={variant === "header"}
        className={cn("h-auto object-contain", logo.className)}
        sizes={variant === "header" ? "(max-width: 379px) 188px, (max-width: 639px) 205px, 238px" : "270px"}
      />
    </Link>
  );
}
