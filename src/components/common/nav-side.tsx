"use client";

import { navItems } from "@/constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavSide() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="noShadow" size="icon" className="lg:hidden">
          <MenuIcon className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-0">
        <SheetHeader className="border-b-2 border-border p-4">
          <SheetTitle className="text-2xl font-bold">funroad</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="noShadow"
              className="w-full justify-start border-0 bg-transparent text-lg font-medium hover:bg-main hover:text-main-foreground"
            >
              <Link href={item.href}>{item.children}</Link>
            </Button>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2 border-t-2 border-border p-4">
          <Button
            asChild
            variant="noShadow"
            className="w-full bg-white hover:bg-pink-400 text-lg"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            variant="noShadow"
            className="w-full bg-black text-white hover:bg-pink-400 hover:text-black text-lg"
          >
            <Link href="/register">Start Selling</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
