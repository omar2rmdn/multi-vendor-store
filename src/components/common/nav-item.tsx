"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}

export function NavItem({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Button
      asChild
      variant={"noShadow"}
      className={cn(
        "bg-transparent hover:bg-transparent border border-transparent hover:border-black rounded-full p-5.5 text-lg",
        isActive && "bg-black hover:bg-black text-white hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
