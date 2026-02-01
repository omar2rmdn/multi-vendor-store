"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDropdownPosition } from "@/hooks/use-dropdown-position";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import Link from "next/link";
import { useRef } from "react";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export function CategoryDropdown({
  category,
  isActive,
  isNavigationHovered,
}: Props) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { align } = useDropdownPosition(triggerRef);

  const subcategories = category.subcategories as Category[] | undefined;
  const hasSubcategories = subcategories && subcategories.length > 0;

  if (!hasSubcategories) {
    return (
      <Button
        asChild
        variant={"reverse"}
        className={cn(
          "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-black text-black",
          isActive && !isNavigationHovered && "bg-white border-black",
        )}
      >
        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          ref={triggerRef}
          variant={"reverse"}
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-black text-black",
            isActive && !isNavigationHovered && "bg-white border-black",
          )}
        >
          {category.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align={align}>
        {subcategories.map((subcategory) => (
          <DropdownMenuItem
            key={subcategory.id}
            asChild
            className="focus:border-transparent cursor-pointer"
          >
            <Link href={`/categories/${subcategory.slug}`}>
              {subcategory.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
