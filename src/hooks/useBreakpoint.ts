"use client"
import { breakpoints } from "@/style/breakpoint";
import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoints.mobile);
    check();

    setHasMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return { isMobile, hasMounted };
};
