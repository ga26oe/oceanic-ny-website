"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import Image from "next/image";

const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center px-4">
      <Image
        src="/images/oceanicLogo.svg"
        alt="Brand Logo"
        width={150}
        height={50}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-secondary-foreground text-primary-foreground flex items-center justify-between px-4">
      <BrandLogo />
      <div className="flex items-center space-x-8">{children}</div>
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 text-foreground relative", // Added relative for absolute positioning of underline
        "after:absolute after:left-0 after:bottom-2 after:h-[2px] after:w-full after:origin-left", // Underline styling
        pathname === props.href
          ? "text-accent after:bg-accent"
          : "after:scale-x-0 hover:text-accent hover:after:scale-x-100 after:bg-accent after:transition-transform after:duration-300"
      )}
    />
  );
}
