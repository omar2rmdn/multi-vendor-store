"use client";

import { useEffect, useState } from "react";

type DropdownSide = "left" | "right";
type DropdownAlign = "start" | "center" | "end";

interface DropdownPosition {
  side: DropdownSide;
  align: DropdownAlign;
}

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useDropdownPosition(
  ref?: React.RefObject<HTMLElement | null>,
): DropdownPosition {
  const [position, setPosition] = useState<DropdownPosition>({
    side: "bottom" as unknown as DropdownSide,
    align: "start",
  });

  useEffect(() => {
    const calculatePosition = () => {
      const screenWidth = window.innerWidth;

      // On mobile, always align center
      if (screenWidth < MOBILE_BREAKPOINT) {
        setPosition({
          side: "bottom" as unknown as DropdownSide,
          align: "center",
        });
        return;
      }

      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementCenter = rect.left + rect.width / 2;
        const screenCenter = screenWidth / 2;

        // If element is on the right half of the screen, align end
        // If on left half, align start
        if (elementCenter > screenCenter) {
          setPosition({
            side: "bottom" as unknown as DropdownSide,
            align: "end",
          });
        } else {
          setPosition({
            side: "bottom" as unknown as DropdownSide,
            align: "start",
          });
        }
        return;
      }

      // Default for tablet/desktop without ref
      if (screenWidth < TABLET_BREAKPOINT) {
        setPosition({
          side: "bottom" as unknown as DropdownSide,
          align: "center",
        });
      } else {
        setPosition({
          side: "bottom" as unknown as DropdownSide,
          align: "start",
        });
      }
    };

    calculatePosition();

    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, [ref]);

  return position;
}
