"use client";

<<<<<<< HEAD
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
=======
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
>>>>>>> 98ad9e9 (Add HTIC experience and fix achievements anchor scroll)

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`Route changed to: ${url}`);
<<<<<<< HEAD
    
    // Force a re-render of the entire page
    const handleRouteChange = () => {
      // Remove any stale event listeners
      document.removeEventListener('click', () => {});
      
      // Force layout recalculation
      document.body.style.display = 'none';
      void document.body.offsetHeight; // Trigger reflow
      document.body.style.display = '';
    };

    handleRouteChange();
=======

    const scrollToHash = () => {
      if (typeof window === "undefined") return;
      const { hash } = window.location;
      if (!hash) return;
      const target = document.getElementById(hash.slice(1));
      if (target) {
        // delay ensures the target exists after route transition
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
      }
    };

    // Force a re-render of the entire page
    const handleRouteChange = () => {
      // Remove any stale event listeners
      document.removeEventListener("click", () => {});
      
      // Force layout recalculation
      document.body.style.display = "none";
      void document.body.offsetHeight; // Trigger reflow
      document.body.style.display = "";
      scrollToHash();
    };

    handleRouteChange();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
>>>>>>> 98ad9e9 (Add HTIC experience and fix achievements anchor scroll)
  }, [pathname, searchParams]);

  return null;
}
