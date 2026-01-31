import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { NavSide } from "./nav-side";
import { Button } from "../ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export function Navbar() {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <div className="flex items-center gap-4 pl-6">
        <Link
          href={"/"}
          className={cn(
            poppins.className,
            "flex items-center text-5xl font-semibold",
          )}
        >
          <span>funroad</span>
        </Link>
      </div>

      <div className="items-center gap-4 hidden lg:flex">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item}>
            {item.children}
          </NavItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant={"noShadow"}
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button
          asChild
          variant={"noShadow"}
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href={"/register"}>Start Selling</Link>
        </Button>
      </div>
      <div className="flex items-center pr-4 lg:hidden">
        <NavSide />
      </div>
    </nav>
  );
}
