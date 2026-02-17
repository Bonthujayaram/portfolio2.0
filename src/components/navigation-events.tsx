"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`Route changed to: ${url}`);

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
  }, [pathname, searchParams]);

  return null;
}
